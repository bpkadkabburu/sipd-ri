const XLSX = require('xlsx-js-style')
const fs = require('fs')

function reducer(element, x) {
  return element.reduce((accumulator, currentValue) => {
    (accumulator[currentValue[x]] = accumulator[currentValue[x]] || []).push(currentValue);
    return accumulator;
  }, {})
}

function groupByLength(array, key) {
  return array.reduce((acc, obj) => {
    const keyValue = obj[key];
    acc[keyValue] = (acc[keyValue] || 0) + 1;
    return acc;
  }, {});
}

function create() {
  let listSubkegiatan = require('./JSON/pmk-dari-sikd-terisi-anggaran.json')
  let allJson = []
  for (const key in listSubkegiatan) {
    if (Object.hasOwnProperty.call(listSubkegiatan, key)) {
      const element = listSubkegiatan[key];
      let bidang = element.list.map(item => {
        if (item[1].length === 17) {
          return {
            "kode": item[1],
            "bidang": element.bidang,
            "pagu": item[4]
          }
        }
      }).filter(item => item !== undefined)

      allJson = allJson.concat(bidang)
    }
  }

  let pathJson = `JSON\\pmk-110-dari-sikd-terisi-anggaran.json`
  if (fs.existsSync(pathJson)) {
    fs.unlinkSync(pathJson)
  }

  fs.writeFile(pathJson, JSON.stringify(allJson, null, 2), function (err) {
    if (err) {
      console.log('File JSON tidak bisa disimpan', err)
    }
    console.log('Data Berhasil Disimpan')
  });
}

function check() {
  let listSubkegiatan = require('./JSON/pmk-110-dari-sikd-terisi-anggaran.json')
  let a = groupByLength(listSubkegiatan, 'kode')
  console.log(a)
}

function excel() {
  let listPMK = require('./JSON/2024/pmk-dari-sikd-terisi-anggaran.json')
  let excelPMK = [
    [
      { t: "s", v: "Kode Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Nama Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Nama Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Bidang", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  ]
  for (const key in listPMK) {
    if (Object.hasOwnProperty.call(listPMK, key)) {
      const element = listPMK[key];
      let bidang = element.list.map(item => {
        if (item[1].length === 17) {
          let nama = item[2].split("#-#")
          return {
            "Kode Bidang": item[1].substring(0, 12),
            "Nama Bidang": nama[0],
            "Kode Sub Kegiatan": item[1],
            "Nama Sub Kegiatan": nama[1],
            "bidang": element.bidang,
          }
        }
      }).filter(item => item !== undefined)

      let res = bidang.map(item => [
        { t: "s", v: item['Kode Bidang'], s: { font: { name: "Calibri", sz: 9 } } },
        { t: "s", v: item['Nama Bidang'], s: { font: { name: "Calibri", sz: 9 } } },
        { t: "s", v: item['Kode Sub Kegiatan'], s: { font: { name: "Calibri", sz: 9 } } },
        { t: "s", v: item['Nama Sub Kegiatan'], s: { font: { name: "Calibri", sz: 9 } } },
        { t: "s", v: item.bidang, s: { font: { name: "Calibri", sz: 9 } } },
      ])

      excelPMK = excelPMK.concat(res)
    }
  }

  const workbook = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(excelPMK)
  XLSX.utils.book_append_sheet(workbook, ws, "SUB KEGIATAN")
  XLSX.writeFile(workbook, "SUBKEGIATAN PMK 2025.xlsx")

}

excel()



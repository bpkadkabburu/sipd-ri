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
  let listSubkegiatan = require('./JSON/2025/pmk-110-dari-sikd-raw.json')
  let allJson = []
  for (const key in listSubkegiatan) {
    if (Object.hasOwnProperty.call(listSubkegiatan, key)) {
      const element = listSubkegiatan[key];
      let bidang = element.list.map(item => {
        if (item[1].length === 17 || item[1].length === 15) {
          let nama = item[2].split("#-#")
          return {
            "kode": item[1],
            "nama": nama[1],
            "bidang": element.bidang,
            "pagu": item[4]
          }
        }
      }).filter(item => item !== undefined)

      allJson = allJson.concat(bidang)
    }
  }

  let pathJson = `JSON\\2025\\pmk-110-dari-sikd.json`
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
  let listSubkegiatan = require('./JSON/2025/pmk-110-dari-sikd.json')
  let listBidang = reducer(listSubkegiatan, 'bidang')
  for (const key in listBidang) {
    if (Object.prototype.hasOwnProperty.call(listBidang, key)) {
      const element = listBidang[key];
      console.log(key, " => ", element.length)
      console.log("first element => ", 2, 0, element[0]?.kode)
      console.log("mid element ", (parseInt(element.length / 2)) + 2, (parseInt(element.length / 2)), " => ", element[parseInt(element.length / 2)]?.kode)
      console.log("last element ", element.length + 1, element.length - 1, " => ", element[element.length - 1]?.kode)
      console.log('nomor 101 => ', element[102]?.kode)
      console.log('nomor 201 => ', element[202]?.kode)
      console.log('nomor 301 => ', element[302]?.kode)
      console.log('nomor 401 => ', element[402]?.kode)

    }
  }
}

function excel() {
  const workbook = XLSX.utils.book_new();
  let listPMK = require('./JSON/2025/pmk-110-dari-sikd-raw.json')
  for (const key in listPMK) {
    if (Object.hasOwnProperty.call(listPMK, key)) {
      const element = listPMK[key];
      let excelPMK = [
        [
          { t: "s", v: "Kode Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
          { t: "s", v: "Nama Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
          { t: "s", v: "Kode Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
          { t: "s", v: "Nama Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
          { t: "s", v: "Bidang", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
        ]
      ]
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
        } else {
          console.log(item)
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

      const worksheet = XLSX.utils.aoa_to_sheet(excelPMK);

      XLSX.utils.book_append_sheet(workbook, worksheet, element.bidang);
    }
  }

  XLSX.writeFile(workbook, "SUBKEGIATAN PMK 2025.xlsx")

}

check()



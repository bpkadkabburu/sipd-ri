const XLSX = require('xlsx-js-style')

function total(x, y) {
  return x.reduce((acc, item) => acc + parseFloat(item[y]), 0)
}

function reducer(element, x) {
  return element.reduce((accumulator, currentValue) => {
    (accumulator[currentValue[x]] = accumulator[currentValue[x]] || []).push(currentValue);
    return accumulator;
  }, {})
}

function mapper(element, x) {
  return element.map(a => a[x])
}

function unique(element, index, mode) {
  const temp = []
  const duplItem = []
  for (const item of element) {
    const isDuplicate = temp.find(x => x[index] === item[index])
    if (!isDuplicate) {
      temp.push(item)
    } else {
      duplItem.push(item)
    }
  }

  if (mode === 'duplikat') {
    return duplItem
  } else if (mode === 'non') {
    return temp
  }
}

function format(x) {
  let a = Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(x)
  a = a.replace("Rp", "Rp.")
  return a
}

let b = require('./JSON/2025/ringkasan-kua-ppas-9-3-2024.json')
let listPMK = require('./JSON/2025/pmk-110-dari-sikd.json')
let listDinas = reducer(b, 'nama_sub_skpd');
let TOTAL = 0
let all = [];
let subkegiatanAll = [];
subkegiatanAll.push(
  [
    { t: "s", v: "Kode", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Nilai", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Kode SKPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Nama SKPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Kode Bidang Urusan", s: { font: { bold: true, name: "Calibri", sz: 9, alignment: { wrapText: true } } } },
    { t: "s", v: "Bidang Urusan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Kode PMK", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Bidang PMK", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
  ],
)
const workbook = XLSX.utils.book_new();
for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    TOTAL = 0
    const element = listDinas[key]
    let duplicate = unique(element, 'kode_sub_giat', 'non')
    // console.log('\x1b[31m%s\x1b[0m', key)
    all = []
    all.push(
      [{ t: "s", v: "SUBKEGIATAN", s: { font: { bold: true, name: "Calibri", sz: 9 } } }],
      [null, null, null, null],
      [
        { t: "s", v: "Kode", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
        { t: "s", v: "Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      ],
      [
        { t: "s", v: duplicate[0].kode_sub_skpd + " " + key, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
        null,
      ]
    )

    // if (/Puskesmas/.test(key)) {
    //   let listSubkegiatan = reducer(duplicate, 'kode_sub_giat')
    //   for (const keySubkegiatan in listSubkegiatan) {
    //     if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
    //       const subkegiatan = listSubkegiatan[keySubkegiatan];
    //       all.push([
    //         { t: "s", v: subkegiatan[0].kode_sub_giat, s: { font: { name: "Calibri", sz: 9 } } },
    //         { t: "s", v: subkegiatan[0].nama_sub_giat, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
    //       ])
    //     }
    //   }
    // } else {
      let listSubkegiatan = reducer(duplicate, 'kode_sub_giat')
      for (const keySubkegiatan in listSubkegiatan) {
        if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
          const subkegiatan = listSubkegiatan[keySubkegiatan];
          all.push([
            { t: "s", v: subkegiatan[0].kode_sub_giat, s: { font: { name: "Calibri", sz: 9 } } },
            { t: "s", v: subkegiatan[0].nama_sub_giat, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
          ])

          let kodePmk = null
          let bidangPmk = null

          let cariSubkegiatanPmk = listPMK.filter(function (item) {
            return item.kode == subkegiatan[0].kode_sub_giat
          })

          if (cariSubkegiatanPmk.length === 1) {
            kodePmk = { t: "s", v: cariSubkegiatanPmk[0].kode, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
            bidangPmk = { t: "s", v: cariSubkegiatanPmk[0].bidang, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
          } else {
            kodePmk = { t: "s", v: mapper(cariSubkegiatanPmk, 'kode').join(', '), s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
            bidangPmk = { t: "s", v: mapper(cariSubkegiatanPmk, 'bidang').join(', '), s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
          }

          subkegiatanAll.push(
            [
              { t: "s", v: subkegiatan[0].kode_sub_giat, s: { font: { name: "Calibri", sz: 9 } } },
              { t: "s", v: subkegiatan[0].nama_sub_giat, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
              { t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
              { t: "s", v: duplicate[0].kode_sub_skpd, s: { font: { name: "Calibri", sz: 9 } } },
              { t: "s", v: key, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
              { t: "s", v: subkegiatan[0].kode_bidang_urusan, s: { font: { name: "Calibri", sz: 9 } } },
              { t: "s", v: subkegiatan[0].nama_bidang_urusan, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } },
              kodePmk,
              bidangPmk,
            ]
          )
        }
      }
    // }

    // const worksheet = XLSX.utils.aoa_to_sheet(all);
    // worksheet["!cols"] = [ { wpx: 185 }, { wpx: 470 }, { wpx: 580 }, { wpx: 125 }, { wpx: 205 } ];

    // XLSX.utils.book_append_sheet(workbook, worksheet, duplicate[0].nama_sub_skpd.substring(0,30));
  }
}

const skAllWs = XLSX.utils.aoa_to_sheet(subkegiatanAll)
const skAllWb = XLSX.utils.book_new()
skAllWs["!cols"] = [{ wpx: 100 }, { wpx: 250 }, { wpx: 50 }, { wpx: 100 }, { wpx: 150 }, { wpx: 100 }, { wpx: 150 }, { wpx: 100 }, { wpx: 100 }, { wpx: 100 }];
XLSX.utils.book_append_sheet(skAllWb, skAllWs, "SUB KEGIATAN")
XLSX.writeFile(skAllWb, "KUAPPAS-2025.xlsx", { compression: true })
// XLSX.writeFile(workbook, "KUAPPAS-SUBKEGIATAN-PER-SKPD-9-10-2023.xlsx", {compression: true})

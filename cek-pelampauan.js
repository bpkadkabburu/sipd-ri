const XLSX = require('xlsx-js-style')
const fs = require('fs')
const { calculateSum, groupByProperty, extractProperty, isObject, isArray, isArrayOfObjects, countByProperty } = require('./lib/utils.js');
const listRealisasi = require('./input/json/2025/realisasi_complete.json')

function cekPelampauan() {
  const xlfPergeseran = './input/excel/2025/rekap5_pergeseran_2.xlsx'
  const xlbPergeseran = fs.readFileSync(xlfPergeseran)
  const wbPergeseran = XLSX.read(xlbPergeseran)
  let listDataPergeseran = XLSX.utils.sheet_to_json(wbPergeseran.Sheets[wbPergeseran.SheetNames[0]])
  let newDataPergeseran = listDataPergeseran.filter((x) => {
    if (typeof x['KODE REKENING'] !== 'undefined') {
      x['AKUN'] = x['KODE REKENING'].substring(0, 1)
      x['KELOMPOK'] = x['KODE REKENING'].substring(0, 3)
      x['JENIS'] = x['KODE REKENING'].substring(0, 6)
      x['OBJEK'] = x['KODE REKENING'].substring(0, 9)
      x['RINCIAN OBJEK'] = x['KODE REKENING'].substring(0, 12)
      x['SUB RINCIAN OBJEK'] = x['KODE REKENING']
      return x
    }
  })

  for (const element of listRealisasi) {
    let pergeseran = newDataPergeseran.filter(x =>
      x['SUB RINCIAN OBJEK'] === element['KODE REKENING'] &&
      x['NAMA SUB KEGIATAN'] === element['NAMA SUB KEGIATAN']
    )

    let paguBaru = calculateSum(pergeseran, 'PAGU')
    let selisih = paguBaru - element['REALISASI']
    element['PAGU BARU'] = paguBaru
    element['SELISIH'] = selisih
    element['PELAMPAUAN'] = selisih < 0 ? 'YA' : 'TIDAK'
  }
  const worksheet = XLSX.utils.json_to_sheet(listRealisasi)
  const wbRealisasi = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wbRealisasi, worksheet, 'Realisasi');
  XLSX.writeFile(wbRealisasi, './output/2025/realisasi_pagu_baru.xlsx');
  // console.log(newDataPergeseran)
}

cekPelampauan()

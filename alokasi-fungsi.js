const XLSX = require('xlsx-js-style')
const fs = require('fs')

function total(x, y) {
  return x.reduce((acc, item) => {
    let value = item[y]
    if (typeof value === 'undefined') {
      value = 0
    }
    return acc + parseFloat(value)
  }, 0)
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

function filtered(element, x, y) {
  return element.filter(a => y.indexOf(a[x]) > -1)
}

function filterUndefined(element, x) {
  return element.filter(a => a[x] !== undefined)
}

function filterRekening(element, x, y, z) {
  return element.filter(a => y.indexOf(a[x].substring(0, z)) > -1).map(a => {
    return {
      ...a,
      'REK': a[x].substring(0, z)
    }
  })
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

const xlf = './EXCEL/2025/rekening.xlsx'
const xlb = fs.readFileSync(xlf)
const wb = XLSX.read(xlb)
const listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
// console.log(listData)

const rekeningBelanja = [
  { 'nama': 'Belanja Pegawai', 'kode_rekening': '5.1.01' },
  { 'nama': 'Belanja Barang dan Jasa', 'kode_rekening': '5.1.02' },
  { 'nama': 'Belanja Bunga', 'kode_rekening': '5.1.03' },
  { 'nama': 'Belanja Subsidi', 'kode_rekening': '5.1.04' },
  { 'nama': 'Belanja Hibah', 'kode_rekening': '5.1.05' },
  { 'nama': 'Belanja Bantuan Sosial', 'kode_rekening': '5.1.06' },
  { 'nama': 'Belanja Modal Tanah', 'kode_rekening': '5.2.01' },
  { 'nama': 'Belanja Modal Peralatan dan Mesin', 'kode_rekening': '5.2.02' },
  { 'nama': 'Belanja Modal Gedung dan Bangunan', 'kode_rekening': '5.2.03' },
  { 'nama': 'Belanja Modal Jalan, Jaringan, dan Irigasi', 'kode_rekening': '5.2.04' },
  { 'nama': 'Belanja Modal Aset Tetap Lainnya', 'kode_rekening': '5.2.05' },
  { 'nama': 'Belanja Modal Aset Lainnya', 'kode_rekening': '5.2.06' },
  { 'nama': 'Belanja Bagi Hasil', 'kode_rekening': '5.4.01' },
  { 'nama': 'Belanja Bantuan Keuangan', 'kode_rekening': '5.4.02' },
]

const listUrusan = reducer(listData, 'NAMA BIDANG URUSAN')
const workbook = XLSX.utils.book_new();
let alokasiFungsi = [
  [
    { t: "s", v: "Nama Urusan / Rekening", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    { t: "s", v: "Total Pagu", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
  ]
]

for (const keyUrusan in listUrusan) {
  if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
    const urusan = listUrusan[keyUrusan];

    console.log(keyUrusan)
    console.log(urusan)
    let result = rekeningBelanja.map((rek) => {
      // Cari semua item di data yang memiliki kode_rekening yang sesuai
      let totalPagu = urusan
        .filter(d => d['KODE REKENING'].startsWith(rek.kode_rekening)) // cari kode yang sesuai
        .reduce((total, current) => total + current.pagu, 0); // jumlahkan pagu

      return {
        nama: rek.nama,
        kode_rekening: rek.kode_rekening,
        total_pagu: totalPagu
      };
    });
    console.log(result)
  }
}




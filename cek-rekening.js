const XLSX = require('xlsx-js-style')
const fs = require('fs')

function total(x, y){
    return x.reduce((acc, item) => {
      let value = item[y]
      if(typeof value === 'undefined'){
        value = 0
      }
      return acc + parseFloat(value)
    }, 0)
}

function reducer(element, x){
    return element.reduce((accumulator, currentValue) =>{
        (accumulator[currentValue[x]] = accumulator[currentValue[x]] || []).push(currentValue);
        return accumulator;
    }, {})
}

function mapper(element, x){
    return element.map(a => a[x])
}

function unique(element, index, mode){
    const temp = []
    const duplItem = []
    for (const item of element) {
        const isDuplicate = temp.find(x => x[index] === item[index])
        if(!isDuplicate){
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

function generateArray(listDinas){
  let result = []
  for (const key in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, key)) {
      const dinas = listDinas[key];

      let listBelanja = reducer(dinas, 'INDUK')
      let rincian = []
      rincian.push({t:"s", v:dinas[0]['NAMA SUB UNIT'], s:{font:{name: "Calibri", sz: 9}}})
      for (let index = 1; index < 14; index++) {
        rincian[index] = null
      }
      rincian[13] = {t:"n", v:total(dinas, 'PAGU'), s:{font:{bold:true, name: "Calibri", sz: 9}}} 
      for (const keyBelanja in listBelanja) {
        if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
          const belanja = listBelanja[keyBelanja];
          let totalBelanja = {t:"n", v:total(belanja, 'PAGU'), s:{font:{name: "Calibri", sz: 9}}} 

          if(keyBelanja === '5.1.01'){
            rincian[1] = totalBelanja
          }

          if(keyBelanja === '5.1.02'){
            rincian[2] = totalBelanja
          }

          if(keyBelanja === '5.1.05'){
            rincian[3] = totalBelanja
          }

          if(keyBelanja === '5.1.06'){
            rincian[4] = totalBelanja
          }

          if(keyBelanja === '5.2.02'){
            rincian[5] = totalBelanja
          }

          if(keyBelanja === '5.2.03'){
            rincian[6] = totalBelanja
          }

          if(keyBelanja === '5.2.04'){
            rincian[7] = totalBelanja
          }

          if(keyBelanja === '5.2.05'){
            rincian[8] = totalBelanja
          }

          if(keyBelanja === '5.2.06'){
            rincian[9] = totalBelanja
          }

          if(keyBelanja === '5.3.01'){
            rincian[10] = totalBelanja
          }

          if(keyBelanja === '5.4.01'){
            rincian[11] = totalBelanja
          }

          if(keyBelanja === '5.4.02'){
            rincian[12] = totalBelanja
          }
        }
      }
      result.push(rincian)
    }
  }

  return result
}

const xlf = './EXCEL/rekap.xlsx'
const xlb = fs.readFileSync(xlf)
const wb = XLSX.read(xlb)
let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

let newData = listData.filter((x) => {
  if(typeof x['KODE REKENING'] !== 'undefined'){
    let induk = x['KODE REKENING'].substring(0, 6)
    x['INDUK'] = induk
    return x
  }
})

let newDAK = newData.filter((x) => {
  if(/DAK/.test(x['NAMA SUMBER DANA']) || /Alokasi Khusus/.test(x['NAMA SUMBER DANA'])){
    return x
  }
})

let newDAU = newData.filter((x) => {
  if(!/DAK/.test(x['NAMA SUMBER DANA']) && !/Alokasi Khusus/.test(x['NAMA SUMBER DANA'])){
    return x
  }
})

const dinasAll = reducer(newData, 'KODE SUB UNIT')
const dinasDAK = reducer(newDAK, 'KODE SUB UNIT')
const dinasDAU = reducer(newDAU, 'KODE SUB UNIT')

const workbook = XLSX.utils.book_new();

let listSeluruhRekening = listSeluruhDAU = listSeluruhDAK = [
  [
    {t:"s", v:"Nama OPD", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Operasi", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    null,
    null,
    null,
    {t:"s", v:"Belanja Modal", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    null,
    null,
    null,
    null,
    {t:"s", v:"Belanja Tidak Terduga", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Bagi Hasil", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Bantuan Keuangan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"TOTAL", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
  ],
  [
    null,
    {t:"s", v:"Belanja Pegawai", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Belanja Barang dan Jasa", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Belanja Hibah", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Bantuan Sosial", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Modal Peralatan Mesin", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Belanja Modal Gedung dan Bangunan", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Belanja Modal Jalan, Jaringan dan Irigasi", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Modal Aset Tetap Lainnya", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Belanja Modal Aset Lainnya", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
  ]
]

let dataAll = generateArray(dinasAll)
let dataDAK = generateArray(dinasDAK)
let dataDAU = generateArray(dinasDAU)

listSeluruhRekening = listSeluruhRekening.concat(dataAll)
listSeluruhDAU = listSeluruhDAU.concat(dataDAU)
listSeluruhDAK = listSeluruhDAK.concat(dataDAK)

const listSeluruhRekeningWs = XLSX.utils.aoa_to_sheet(listSeluruhRekening)
listSeluruhRekeningWs["!cols"] = [ { wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]
const listSeluruhDAUWs = XLSX.utils.aoa_to_sheet(listSeluruhDAU)
listSeluruhDAUWs["!cols"] = [ { wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]
const listSeluruhDAKWs = XLSX.utils.aoa_to_sheet(listSeluruhDAK)
listSeluruhDAKWs["!cols"] = [ { wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]

XLSX.utils.book_append_sheet(workbook, listSeluruhRekeningWs, 'SELURUH');
XLSX.utils.book_append_sheet(workbook, listSeluruhDAUWs, 'DAU');
XLSX.utils.book_append_sheet(workbook, listSeluruhDAKWs, 'DAK');
XLSX.writeFile(workbook, "HITUNGAN UP.xlsx", { compression: true });

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

function filtered(element, x, y){
  return element.filter(a => y.indexOf(a[x]) > -1)
}

function filterUndefined(element, x){
  return element.filter(a => a[x] !== undefined)
}

function filterRekening(element, x, y, z){
  return element.filter(a => y.indexOf(a[x].substring(0, z)) > -1).map(a =>{
    return {
      ...a,
      'REK' : a[x].substring(0,z)
    }
  })
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

const xlf = './EXCEL/rekap.xlsx'
const xlb = fs.readFileSync(xlf)
const wb = XLSX.read(xlb)
const listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
// console.log(listData)

const belanjaOperasiTransfer = ['5.1.01', '5.1.02', '5.1.05', '5.1.06','5.4.02']
const belanjaModal = ['5.2']

const listUrusan = reducer(listData, 'NAMA BIDANG URUSAN')

for (const keyUrusan in listUrusan) {
  if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
    const urusan = listUrusan[keyUrusan];

    const filteredUndefined = filterUndefined(urusan, 'KODE REKENING')
    
    const rekeningOT = filterRekening(filteredUndefined, 'KODE REKENING', belanjaOperasiTransfer, 6)
    const listRekeningOT = reducer(rekeningOT, 'REK')

    const rekeningModal = filterRekening(filteredUndefined, 'KODE REKENING', belanjaModal, 3)
    const listRekeningModal = reducer(rekeningModal, 'REK')

    console.log(keyUrusan)
    for (const keyRekeningOT in listRekeningOT) {
      if (Object.hasOwnProperty.call(listRekeningOT, keyRekeningOT)) {
        const rekening = listRekeningOT[keyRekeningOT];
        console.log(`${keyRekeningOT} ${format(total(rekening, 'PAGU'))}`)
      }
    }

    for (const keyRekeningModal in listRekeningModal) {
      if (Object.hasOwnProperty.call(listRekeningModal, keyRekeningModal)) {
        const rekening = listRekeningModal[keyRekeningModal];
        console.log(`${keyRekeningModal} ${format(total(rekening, 'PAGU'))}`)
      }
    }
    
  }
}



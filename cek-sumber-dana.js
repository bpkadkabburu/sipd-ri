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

const xlf = './EXCEL/rekap-23-11-2023.xlsx'
const xlb = fs.readFileSync(xlf)
const wb = XLSX.read(xlb)
let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
// console.log(listData)
const listDinas = reducer(listData, 'NAMA SUB UNIT')
let all = []
let sdAll = []
sdAll.push(
  [
    {t:"s", v:"Nama OPD", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Kode Sumber Dana", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Sumber Dana", s:{font:{bold:true, name: "Calibri", sz: 9}}},
    {t:"s", v:"Total Pagu (Rp)", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
  ]
)
const workbook = XLSX.utils.book_new();

for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    const element = listDinas[key];
    all = []
    all.push(
      [
        {t:"s", v:"Kode", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Kode Sumber Dana", s:{font:{bold:true, name: "Calibri", sz: 9}}},
        {t:"s", v:"Sumber Dana", s:{font:{bold:true, name: "Calibri", sz: 9}}},
        {t:"s", v:"Pagu Indikatif (Rp)", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
      ],
    )
    // if(key !== 'Dinas Pendidikan dan Kebudayaan'){
    //   break
    // }
    let listSubkegiatan = reducer(element, 'NAMA SUB KEGIATAN')
    for (const keyListSubkegiatan in listSubkegiatan) {
      if (Object.hasOwnProperty.call(listSubkegiatan, keyListSubkegiatan)) {
        const subkegiatan = listSubkegiatan[keyListSubkegiatan];
        let listSumberDana = reducer(subkegiatan, 'NAMA SUMBER DANA')
        for (const keySumberDana in listSumberDana) {
          if (Object.hasOwnProperty.call(listSumberDana, keySumberDana)) {
            const sumberDana = listSumberDana[keySumberDana];
            let arrSd = [];
            if(keySumberDana === 'undefined'){
              arrSd.push(
                {t:"s", v:subkegiatan[0]['KODE SUB KEGIATAN'], s:{font:{name: "Calibri", sz: 9}}}, 
                {t:"s", v:subkegiatan[0]['NAMA SUB KEGIATAN'], s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true, vertical: 'center' }}},
                {t:"s", v:"-", s:{font:{name: "Calibri", sz: 9}}}, 
                {t:"s", v:"-", s:{font:{name: "Calibri", sz: 9}}}, 
                {t:"n", v:total(sumberDana, 'PAGU'), s:{font:{name: "Calibri", sz: 9}}}, 
              )
            } else {
              arrSd.push(
                {t:"s", v:subkegiatan[0]['KODE SUB KEGIATAN'], s:{font:{name: "Calibri", sz: 9}}}, 
                {t:"s", v:subkegiatan[0]['NAMA SUB KEGIATAN'], s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true, vertical: 'center' }}},
                {t:"s", v:sumberDana[0]['KODE SUMBER DANA'], s:{font:{name: "Calibri", sz: 9}}}, 
                {t:"s", v:sumberDana[0]['NAMA SUMBER DANA'], s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true, vertical: 'center' }}}, 
                {t:"n", v:total(sumberDana, 'PAGU'), s:{font:{name: "Calibri", sz: 9}}}, 
              )
            }
            all.push(
              arrSd
            )
          }
        }
      }
    }

    let listSD = reducer(element, 'NAMA SUMBER DANA')
    for (const sd in listSD) {
      if (Object.hasOwnProperty.call(listSD, sd)) {
        const SD = listSD[sd];
        sdAll.push(
          [
            {t:"s", v:element[0]['NAMA SUB UNIT'], s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true, vertical: 'center' }}},
            {t:"s", v:SD[0]['KODE SUMBER DANA'] ?? '-', s:{font:{bold:true, name: "Calibri", sz: 9}}},
            {t:"s", v:SD[0]['NAMA SUMBER DANA'] ?? '-', s:{font:{bold:true, name: "Calibri", sz: 9}, alignment: { wrapText: true, vertical: 'center' }}},
            {t:"n", v:total(SD, 'PAGU'), s:{font:{name: "Calibri", sz: 9}}},
          ]
        )
      }
    }

    const worksheet = XLSX.utils.aoa_to_sheet(all);
    worksheet["!cols"] = [ { wpx: 185 }, { wpx: 300 }, { wpx: 200 }, { wpx: 450 }, { wpx: 200 } ];

    XLSX.utils.book_append_sheet(workbook, worksheet, element[0]['NAMA SUB UNIT'].substring(0,30));
    
  }
}
const sdAllWs = XLSX.utils.aoa_to_sheet(sdAll);
const sdAllWb = XLSX.utils.book_new();
sdAllWs["!cols"] = [ { wpx: 375 }, { wpx: 200 }, { wpx: 500 }, { wpx: 120 }];

XLSX.utils.book_append_sheet(sdAllWb, sdAllWs, 'SUMBER DANA PER OPD');
XLSX.writeFile(workbook, "SUMBER DANA PER OPD PER SUBKEGIATAN.xlsx", { compression: true });
XLSX.writeFile(sdAllWb, "SUMBER DANA PER OPD.xlsx", { compression: true });

const XLSX = require('xlsx-js-style')

function total(x, y){
    return x.reduce((acc, item) => acc + parseFloat(item[y]), 0)
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

let b = require('./ringkasan-kua-ppas-22-9-2023.json')
let listDinas = reducer(b, 'nama_sub_skpd');
let TOTAL = 0
let all = [];
let paguAll = [];
const workbook = XLSX.utils.book_new();
for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    TOTAL = 0
    const element = listDinas[key]
    let duplicate = unique(element, 'kode_sub_giat', 'non')
    // console.log('\x1b[31m%s\x1b[0m', key)
    all = []
    all.push(
      [{t:"s", v:"SUBKEGIATAN", s:{font:{bold:true, name: "Calibri", sz: 9}}}, "", "", ""],
      ["", ""],
      [
        {t:"s", v:"Kode", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
      ],
      [
        {t:"s", v:duplicate[0].kode_sub_skpd + " " + key, s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        "", 
      ]
    )
    let listSubkegiatan = reducer(duplicate, 'nama_sub_giat')
    for (const keySubkegiatan in listSubkegiatan) {
        if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
          const subkegiatan = listSubkegiatan[keySubkegiatan];
          all.push([
            {t:"s", v:subkegiatan[0].kode_sub_giat, s:{font:{name: "Calibri", sz: 9}}},
            {t:"s", v:keySubkegiatan, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
          ])
        }
    }
    
    const worksheet = XLSX.utils.aoa_to_sheet(all);
    worksheet["!cols"] = [ { wpx: 185 }, { wpx: 470 }, { wpx: 580 }, { wpx: 125 }, { wpx: 205 } ];

    XLSX.utils.book_append_sheet(workbook, worksheet, duplicate[0].nama_sub_skpd.substring(0,30));
  }
}

XLSX.writeFile(workbook, "SUBKEGIATAN_KUAPPAS.xlsx", {compression: true})

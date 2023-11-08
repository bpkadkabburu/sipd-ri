const XLSX = require('xlsx-js-style')

let listSubkegiatan = require('./JSON/list-subkegiatan.json')
const workbook = XLSX.utils.book_new()
let all = [
  [
    {t:"s", v:"Kode", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
    {t:"s", v:"Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
  ],
]
for (const key in listSubkegiatan) {
  if (Object.hasOwnProperty.call(listSubkegiatan, key)) {
    const element = listSubkegiatan[key]    
    all.push(
      [
        {t:"s", v:element.kode_sub_giat, s:{font:{name: "Calibri", sz: 9}}}, 
        {t:"s", v:element.nama_sub_giat, s:{font:{name: "Calibri", sz: 9}}}, 
      ],
    )
  }
}
const worksheet = XLSX.utils.aoa_to_sheet(all);
worksheet["!cols"] = [ { wpx: 185 }, { wpx: 470 }, ];

XLSX.utils.book_append_sheet(workbook, worksheet, "LIST SUB KEGIATAN");
XLSX.writeFile(workbook, "LIST SUBKEGIATAN.xlsx", {compression: true})

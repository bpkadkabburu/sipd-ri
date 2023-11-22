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

let b = require('./JSON/ringkasan-kua-ppas-16-11-2023.json')
let listDinas = reducer(b, 'nama_sub_skpd');
let TOTAL = 0
let all = [];
let paguAll = [];
let totalAll = 0
const workbook = XLSX.utils.book_new();
for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    TOTAL = 0
    const element = listDinas[key]
    let duplicate = unique(element, 'kode_sub_giat', 'non')
    // console.log('\x1b[31m%s\x1b[0m', key)
    all = []
    all.push(
      [{t:"s", v:"Tabel IV.3", s:{font:{bold:true, name: "Calibri", sz: 9}}}, null, null, null, null],
      [{t:"s", v:"Ringkasan KUA PPAS Tahun 2024", s:{font:{bold:true, name: "Calibri", sz: 9}}}, null, null, null, null],
      [{t:"s", v:"Kabupaten Buru", s:{font:{bold:true, name: "Calibri", sz: 9}}}, null, null, null, null],
      [null, null, null, null, null],
      [
        {t:"s", v:"Kode", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Urusan / Bidang Urusan / Program / Kegiatan / Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Indikator Program / Kegiatan / Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Target 2024", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Pagu Indikatif (Rp)", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
      ],
      [
        {t:"s", v:duplicate[0].kode_sub_skpd + " " + key, s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        null, 
        null, 
        null, 
        {t:"n", z:"#,##0.00", v:total(duplicate, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
      ]
    )
    let listUrusan = reducer(duplicate, 'nama_urusan')
    for (const keyUrusan in listUrusan) {
        if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
          const urusan = listUrusan[keyUrusan];
          all.push([
            {t:"s", v:urusan[0].kode_urusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
            {t:"s", v:keyUrusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
            null,
            null,
            {t:"n", z:"#,##0.00", v:total(urusan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
          ])

          let listBidangUrusan = reducer(urusan, 'nama_bidang_urusan')
          for (const keyBidangUrusan in listBidangUrusan) {
            if (Object.hasOwnProperty.call(listBidangUrusan, keyBidangUrusan)) {
              const bidangUrusan = listBidangUrusan[keyBidangUrusan];
              // console.log('\x1b[31m%s\x1b[0m', keyBidangUrusan)
              // console.log("PAGU " + format(total(duplicate, 'pagu_indikatif')))
              all.push([
                {t:"s", v:bidangUrusan[0].kode_bidang_urusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                {t:"s", v:keyBidangUrusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                null,
                null,
                {t:"n", z:"#,##0.00", v:total(bidangUrusan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
              ])
              let listProgram = reducer(bidangUrusan, 'nama_program')
              for (const keyProgram in listProgram) {
                if (Object.hasOwnProperty.call(listProgram, keyProgram)) {
                  const program = listProgram[keyProgram];
                  let totalUkurCapaian = program[0].tolak_ukur_capaian
                  let targetTeksCapaian = program[0].target_teks_capaian
                  all.push([
                    {t:"s", v:program[0].kode_program, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                    {t:"s", v:keyProgram, s:{font:{bold:true, name: "Calibri", sz: 9}, alignment: { wrapText: true }},},
                    {t:"s", v:totalUkurCapaian, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                    {t:"s", v:targetTeksCapaian, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                    {t:"n", z:"#,##0.00", v:total(program, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
                  ])
                  let listKegiatan = reducer(program, 'nama_giat')
                  for (const keyKegiatan in listKegiatan) {
                    if (Object.hasOwnProperty.call(listKegiatan, keyKegiatan)) {
                      const kegiatan = listKegiatan[keyKegiatan];
                      let totalUkurOutput = kegiatan[0].tolak_ukur_output
                      let targetTeksOutput = kegiatan[0].target_teks_output
                      all.push([
                        {t:"s", v:kegiatan[0].kode_giat, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                        {t:"s", v:keyKegiatan, s:{font:{bold:true, name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                        {t:"s", v:totalUkurOutput, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                        {t:"s", v:targetTeksOutput, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                        {t:"n", z:"#,##0.00", v:total(kegiatan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
                      ])
                      let listSubkegiatan = reducer(kegiatan, 'nama_sub_giat')
                      for (const keySubkegiatan in listSubkegiatan) {
                        if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
                          const subkegiatan = listSubkegiatan[keySubkegiatan];
                          let tolakUkurSub = subkegiatan[0].tolok_ukur_sub
                          let targetSubTeks = subkegiatan[0].target_sub_teks
                          all.push([
                            {t:"s", v:subkegiatan[0].kode_sub_giat, s:{font:{name: "Calibri", sz: 9}}},
                            {t:"s", v:keySubkegiatan, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                            {t:"s", v:tolakUkurSub, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                            {t:"s", v:targetSubTeks, s:{font:{name: "Calibri", sz: 9}, alignment: { wrapText: true }}},
                            {t:"n", z:"#,##0.00", v:total(subkegiatan, 'pagu_indikatif'), s:{font:{name: "Calibri", sz: 9}}}
                          ])
                          TOTAL += total(subkegiatan, 'pagu_indikatif')
                          // console.log(`${keySubkegiatan} ${format(total(subkegiatan, 'pagu_indikatif'))}`)
                        }
                      }
                    }
                  }
                }
              }
                
            }
          }
        }
    }
    
    const worksheet = XLSX.utils.aoa_to_sheet(all);
    worksheet["!cols"] = [ { wpx: 185 }, { wpx: 470 }, { wpx: 580 }, { wpx: 125 }, { wpx: 205 } ];

    XLSX.utils.book_append_sheet(workbook, worksheet, duplicate[0].nama_sub_skpd.substring(0,30));
    totalAll+=TOTAL
    // console.log('\x1b[31m%s\x1b[0m', key)
    console.log("PAGU " + key + " " + format(total(duplicate, 'pagu_indikatif')))
    console.log("PAGU JUMLAH SUB KEGIATAN " + key + " " + format(TOTAL))
    paguAll.push([
      key,
      {t:"n", z:"#,##0.00", v:Math.round(TOTAL)}
    ])
    // console.log("PENGURANG " + format(total(duplicate, 'pagu')))
    // let pagu = total(element, 'pagu') - total(duplicate, 'pagu')
    // console.log("REAL " +format(pagu))
    // console.log("PEMBULATAN " +format(Math.round(pagu)))
    // TOTAL += Math.round(pagu)
  }
}

const paguWs = XLSX.utils.aoa_to_sheet(paguAll)
const paguWb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(paguWb, paguWs, "PAGU DINAS")
XLSX.writeFile(paguWb, "PAGU DINAS-2.xlsx", {compression: true})

XLSX.writeFile(workbook, "PAGU PER DINAS PER URUSAN-2.xlsx", { compression: true });
// console.log(all)
console.log("\nTOTAL PAGU " + format(Math.round(totalAll)))

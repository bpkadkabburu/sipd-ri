const XLSX = require('xlsx-js-style')
const { calculateSum, groupByProperty, formatToRupiah, filterByUniqueness } = require('./lib/utils.js');

let b = require('./kua-ppas-pend-pemb.json')
let listDinas = groupByProperty(b, 'nama_sub_skpd');
let TOTAL = 0
let all = [];
let paguAll = [];
const workbook = XLSX.utils.book_new();
for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    TOTAL = 0
    const element = listDinas[key]
    let duplicate = filterByUniqueness(element, 'kode_sub_giat')
    // console.log('\x1b[31m%s\x1b[0m', key)
    all = []
    all.push(
      [{t:"s", v:"CEK SUMBER DANA", s:{font:{bold:true, name: "Calibri", sz: 9}}}, "", "", ""],
      ["", "", "", ""],
      [
        {t:"s", v:"Kode", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Urusan / Bidang Urusan / Program / Kegiatan / Sub Kegiatan", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Nama Sumber Dana", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        {t:"s", v:"Pagu Indikatif (Rp)", s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
      ],
      [
        {t:"s", v:duplicate[0].kode_sub_skpd + " " + key, s:{font:{bold:true, name: "Calibri", sz: 9}}}, 
        "", 
        "", 
        {t:"n", z:"#,##0.00", v:calculateSum(duplicate, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
      ]
    )
    let listUrusan = groupByProperty(duplicate, 'nama_urusan')
    for (const keyUrusan in listUrusan) {
        if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
          const urusan = listUrusan[keyUrusan];
          all.push([
            {t:"s", v:urusan[0].kode_urusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
            {t:"s", v:keyUrusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
            "",
            "",
            {t:"n", z:"#,##0.00", v:calculateSum(urusan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
          ])

          let listBidangUrusan = groupByProperty(urusan, 'nama_bidang_urusan')
          for (const keyBidangUrusan in listBidangUrusan) {
            if (Object.hasOwnProperty.call(listBidangUrusan, keyBidangUrusan)) {
              const bidangUrusan = listBidangUrusan[keyBidangUrusan];
              // console.log('\x1b[31m%s\x1b[0m', keyBidangUrusan)
              // console.log("PAGU " + formatToRupiah(calculateSum(duplicate, 'pagu_indikatif')))
              all.push([
                {t:"s", v:bidangUrusan[0].kode_bidang_urusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                {t:"s", v:keyBidangUrusan, s:{font:{bold:true, name: "Calibri", sz: 9}}},
                "",
                "",
                {t:"n", z:"#,##0.00", v:calculateSum(bidangUrusan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
              ])
              let listProgram = groupByProperty(bidangUrusan, 'nama_program')
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
                    {t:"n", z:"#,##0.00", v:calculateSum(program, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
                  ])
                  let listKegiatan = groupByProperty(program, 'nama_giat')
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
                        {t:"n", z:"#,##0.00", v:calculateSum(kegiatan, 'pagu_indikatif'), s:{font:{bold:true, name: "Calibri", sz: 9}}}
                      ])
                      let listSubkegiatan = groupByProperty(kegiatan, 'nama_sub_giat')
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
                            {t:"n", z:"#,##0.00", v:calculateSum(subkegiatan, 'pagu_indikatif'), s:{font:{name: "Calibri", sz: 9}}}
                          ])
                          TOTAL += calculateSum(subkegiatan, 'pagu_indikatif')
                          // console.log(`${keySubkegiatan} ${formatToRupiah(calculateSum(subkegiatan, 'pagu_indikatif'))}`)
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
    // console.log('\x1b[31m%s\x1b[0m', key)
    console.log("PAGU " + key + " " + formatToRupiah(calculateSum(duplicate, 'pagu_indikatif')))
    console.log("PAGU JUMLAH SUB KEGIATAN " + key + " " + formatToRupiah(TOTAL))
    paguAll.push([
      key,
      {t:"n", z:"#,##0.00", v:Math.round(TOTAL)}
    ])
    // console.log("PENGURANG " + formatToRupiah(calculateSum(duplicate, 'pagu')))
    // let pagu = calculateSum(element, 'pagu') - calculateSum(duplicate, 'pagu')
    // console.log("REAL " +formatToRupiah(pagu))
    // console.log("PEMBULATAN " +formatToRupiah(Math.round(pagu)))
    // TOTAL += Math.round(pagu)
  }
}

const paguWs = XLSX.utils.aoa_to_sheet(paguAll)
const paguWb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(paguWb, paguWs, "PAGU DINAS")
XLSX.writeFile(paguWb, "PAGU DINAS-2.xlsx", {compression: true})

XLSX.writeFile(workbook, "PAGU PER DINAS PER URUSAN-2.xlsx", { compression: true });
// console.log(all)
console.log("\nTOTAL PAGU " + formatToRupiah(Math.round(TOTAL)))

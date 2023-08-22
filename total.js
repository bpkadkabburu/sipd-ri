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

let b = require('./kua-ppas1.json')
let listDinas = reducer(b, 'nama_sub_skpd');
let TOTAL = 0
let all = [];
let paguAll = [];
const workbook = XLSX.utils.book_new();
for (const key in listDinas) {
  if (Object.hasOwnProperty.call(listDinas, key)) {
    TOTAL = 0
    const element = listDinas[key]
    // console.log('\x1b[31m%s\x1b[0m', key)
    all = []
    all.push(
      ["Tabel IV.3", "", "", "", ""],
      ["Ringkasan KUA PPAS Tahun 2024", "", "", "", ""],
      ["Kabupaten Buru", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["Kode", "Urusan / Bidang Urusan / Program / Kegiatan / Sub Kegiatan", "Indikator Program / Kegiatan / Sub Kegiatan", "Target 2024", "Pagu Indikatif"],
      [{t:"s", v:element[0].kode_sub_skpd + " " + key, s:{font:{bold:true}}}, "", "", "", {t:"n", z:"#,##0.00", v:total(element, 'pagu_indikatif')}]
    )
    let duplicate = unique(element, 'kode_sub_giat', 'non')
    let listUrusan = reducer(duplicate, 'nama_urusan')
    for (const keyUrusan in listUrusan) {
        if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
          const urusan = listUrusan[keyUrusan];
          all.push([
            urusan[0].kode_urusan,
            keyUrusan,
            "",
            "",
            {t:"n", z:"#,##0.00", v:total(urusan, 'pagu_indikatif')}
          ])

          let listBidangUrusan = reducer(urusan, 'nama_bidang_urusan')
          for (const keyBidangUrusan in listBidangUrusan) {
            if (Object.hasOwnProperty.call(listBidangUrusan, keyBidangUrusan)) {
              const bidangUrusan = listBidangUrusan[keyBidangUrusan];
              // console.log('\x1b[31m%s\x1b[0m', keyBidangUrusan)
              // console.log("PAGU " + format(total(duplicate, 'pagu_indikatif')))
              all.push([
                bidangUrusan[0].kode_bidang_urusan,
                keyBidangUrusan,
                "",
                "",
                {t:"n", z:"#,##0.00", v:total(bidangUrusan, 'pagu_indikatif')}
              ])
              let listProgram = reducer(bidangUrusan, 'nama_program')
              for (const keyProgram in listProgram) {
                if (Object.hasOwnProperty.call(listProgram, keyProgram)) {
                  const program = listProgram[keyProgram];
                  let totalUkurCapaian = program[0].tolak_ukur_capaian
                  let targetTeksCapaian = program[0].target_teks_capaian
                  all.push([
                    program[0].kode_program,
                    keyProgram,
                    totalUkurCapaian,
                    targetTeksCapaian,
                    {t:"n", z:"#,##0.00", v:total(program, 'pagu_indikatif')}
                  ])
                  // console.log(`${keySubkegiatan} ${format(total(subkegiatan, 'pagu_indikatif'))}`)
                  let listSubkegiatan = reducer(program, 'nama_sub_giat')
                  for (const keySubkegiatan in listSubkegiatan) {
                    if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
                      const subkegiatan = listSubkegiatan[keySubkegiatan];
                      let totalUkurOutput = subkegiatan[0].tolak_ukur_output
                      let targetTeksOutput = subkegiatan[0].target_teks_output
                      all.push([
                        subkegiatan[0].kode_sub_giat,
                        keySubkegiatan,
                        totalUkurOutput,
                        targetTeksOutput,
                        {t:"n", z:"#,##0.00", v:total(subkegiatan, 'pagu_indikatif')}
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
    
    const worksheet = XLSX.utils.aoa_to_sheet(all);
    worksheet["!cols"] = [ { wch: 17 }, { wch: 60 }, { wch: 50 }, { wch: 30 }, { wch: 30 } ];

    XLSX.utils.book_append_sheet(workbook, worksheet, duplicate[0].nama_sub_skpd.substring(0,30));
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
XLSX.writeFile(paguWb, "PAGU DINAS.xlsx", {compression: true})

XLSX.writeFile(workbook, "PAGU PER DINAS PER URUSAN.xlsx", { compression: true });
// console.log(all)
console.log("\nTOTAL PAGU " + format(Math.round(TOTAL)))

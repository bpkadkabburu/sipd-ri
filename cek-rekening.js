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

function isDAUUmum(namaSumberDana) {
  return !/DAK|Alokasi Khusus|yang Ditentukan Penggunaannya|Tambahan Dukungan|Pajak|Retribusi/i.test(namaSumberDana);
}

function isDAUPeruntukkan(namaSumberDana) {
  return /yang Ditentukan Penggunaannya|Tambahan Dukungan/i.test(namaSumberDana);
}

function format(x) {
  let a = Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(x)
  a = a.replace("Rp", "Rp.")
  return a
}

function generateArray(listDinas) {
  let result = []
  for (const key in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, key)) {
      const dinas = listDinas[key];

      let listBelanja = reducer(dinas, 'INDUK')
      let rincian = []
      rincian.push({ t: "s", v: dinas[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 } } })
      for (let index = 1; index < 14; index++) {
        rincian[index] = null
      }
      rincian[14] = { t: "n", v: total(dinas, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } }
      for (const keyBelanja in listBelanja) {
        if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
          const belanja = listBelanja[keyBelanja];
          let totalBelanja = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }

          if (keyBelanja === '5.1.01') {
            rincian[1] = totalBelanja
          }

          if (keyBelanja === '5.1.02') {
            rincian[2] = totalBelanja
          }

          if (keyBelanja === '5.1.05') {
            rincian[3] = totalBelanja
          }

          if (keyBelanja === '5.1.06') {
            rincian[4] = totalBelanja
          }

          if (keyBelanja === '5.2.01') {
            rincian[5] = totalBelanja
          }

          if (keyBelanja === '5.2.02') {
            rincian[6] = totalBelanja
          }

          if (keyBelanja === '5.2.03') {
            rincian[7] = totalBelanja
          }

          if (keyBelanja === '5.2.04') {
            rincian[8] = totalBelanja
          }

          if (keyBelanja === '5.2.05') {
            rincian[9] = totalBelanja
          }

          if (keyBelanja === '5.2.06') {
            rincian[10] = totalBelanja
          }

          if (keyBelanja === '5.3.01') {
            rincian[11] = totalBelanja
          }

          if (keyBelanja === '5.4.01') {
            rincian[12] = totalBelanja
          }

          if (keyBelanja === '5.4.02') {
            rincian[13] = totalBelanja
          }
        }
      }
      result.push(rincian)
    }
  }

  return result
}

function generateEfisiensi(listDinas) {
  let result = []
  for (const key in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, key)) {
      const dinas = listDinas[key];

      let listBelanja = reducer(dinas, 'INDUK')
      let rincian = []
      rincian.push({ t: "s", v: dinas[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 } } })
      for (let index = 1; index < 43; index++) {
        rincian[index] = null
      }
      rincian[43] = { t: "n", v: total(dinas, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } }
      for (const keyBelanja in listBelanja) {
        if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
          const belanja = listBelanja[keyBelanja];
          let totalBelanja = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }

          if (keyBelanja === '5.1.01.01') {
            rincian[1] = totalBelanja
          }

          if (keyBelanja === '5.1.01.02') {
            rincian[2] = totalBelanja
          }

          if (keyBelanja === '5.1.01.04') {
            rincian[3] = totalBelanja
          }

          if (keyBelanja === '5.1.01.05') {
            rincian[4] = totalBelanja
          }

          if (keyBelanja === '5.1.01.06') {
            rincian[5] = totalBelanja
          }

          if (keyBelanja === '5.1.02.01') {
            rincian[6] = totalBelanja
          }

          if (keyBelanja === '5.1.02.02') {
            rincian[7] = totalBelanja
          }

          if (keyBelanja === '5.1.02.03') {
            rincian[8] = totalBelanja
          }

          if (keyBelanja === '5.1.02.04') {
            rincian[9] = totalBelanja
          }

          if (keyBelanja === '5.1.02.05') {
            rincian[10] = totalBelanja
          }

          if (keyBelanja === '5.1.02.90') {
            rincian[11] = totalBelanja
          }

          if (keyBelanja === '5.1.05.01') {
            rincian[12] = totalBelanja
          }

          if (keyBelanja === '5.1.05.05') {
            rincian[13] = totalBelanja
          }

          if (keyBelanja === '5.1.05.08') {
            rincian[14] = totalBelanja
          }

          if (keyBelanja === '5.1.06.01') {
            rincian[15] = totalBelanja
          }

          if (keyBelanja === '5.1.06.03') {
            rincian[16] = totalBelanja
          }

          if (keyBelanja === '5.1.06.04') {
            rincian[17] = totalBelanja
          }

          if (keyBelanja === '5.2.01.01') {
            rincian[18] = totalBelanja
          }

          if (keyBelanja === '5.2.02.01') {
            rincian[19] = totalBelanja
          }

          if (keyBelanja === '5.2.02.02') {
            rincian[20] = totalBelanja
          }

          if (keyBelanja === '5.2.02.03') {
            rincian[21] = totalBelanja
          }

          if (keyBelanja === '5.2.02.04') {
            rincian[22] = totalBelanja
          }

          if (keyBelanja === '5.2.02.05') {
            rincian[23] = totalBelanja
          }

          if (keyBelanja === '5.2.02.06') {
            rincian[24] = totalBelanja
          }

          if (keyBelanja === '5.2.02.07') {
            rincian[25] = totalBelanja
          }

          if (keyBelanja === '5.2.02.08') {
            rincian[26] = totalBelanja
          }

          if (keyBelanja === '5.2.02.10') {
            rincian[27] = totalBelanja
          }

          if (keyBelanja === '5.2.02.13') {
            rincian[28] = totalBelanja
          }

          if (keyBelanja === '5.2.02.19') {
            rincian[29] = totalBelanja
          }

          if (keyBelanja === '5.2.02.89') {
            rincian[30] = totalBelanja
          }

          if (keyBelanja === '5.2.03.01') {
            rincian[31] = totalBelanja
          }

          if (keyBelanja === '5.2.03.04') {
            rincian[32] = totalBelanja
          }

          if (keyBelanja === '5.2.04.01') {
            rincian[33] = totalBelanja
          }

          if (keyBelanja === '5.2.04.02') {
            rincian[34] = totalBelanja
          }

          if (keyBelanja === '5.2.04.03') {
            rincian[35] = totalBelanja
          }

          if (keyBelanja === '5.2.05.01') {
            rincian[36] = totalBelanja
          }

          if (keyBelanja === '5.2.05.89') {
            rincian[37] = totalBelanja
          }

          if (keyBelanja === '5.2.06.01') {
            rincian[38] = totalBelanja
          }

          if (keyBelanja === '5.3.01.01') {
            rincian[39] = totalBelanja
          }

          if (keyBelanja === '5.4.01.01') {
            rincian[40] = totalBelanja
          }

          if (keyBelanja === '5.4.01.02') {
            rincian[41] = totalBelanja
          }

          if (keyBelanja === '5.4.02.05') {
            rincian[42] = totalBelanja
          }
        }
      }
      result.push(rincian)
    }
  }

  return result
}

function cekUp() {

  const xlf = './EXCEL/2025/rekap3.xlsx'
  const xlb = fs.readFileSync(xlf)
  const wb = XLSX.read(xlb)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  let newData = listData.filter((x) => {
    if (typeof x['KODE REKENING'] !== 'undefined') {
      let induk = x['KODE REKENING'].substring(0, 6)
      x['INDUK'] = induk
      return x
    }
  })

  let newDAK = newData.filter((x) => {
    if (/DAK/.test(x['NAMA SUMBER DANA']) || /Alokasi Khusus/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  let newDAU = newData.filter((x) => {
    if (!/DAK/.test(x['NAMA SUMBER DANA']) && !/Alokasi Khusus/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  const dinasAll = reducer(newData, 'KODE SUB UNIT')
  const dinasDAK = reducer(newDAK, 'KODE SUB UNIT')
  const dinasDAU = reducer(newDAU, 'KODE SUB UNIT')

  const workbook = XLSX.utils.book_new();

  let listSeluruhRekening = listSeluruhDAU = listSeluruhDAK = [
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Operasi", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      { t: "s", v: "Belanja Modal", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Tidak Terduga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bagi Hasil", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Keuangan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "TOTAL", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ],
    [
      null,
      { t: "s", v: "Belanja Pegawai", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Barang dan Jasa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Hibah", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Sosial", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Peralatan Mesin", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Gedung dan Bangunan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Jalan, Jaringan dan Irigasi", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Aset Tetap Lainnya", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Aset Lainnya", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  ]

  let dataAll = generateArray(dinasAll)
  let dataDAK = generateArray(dinasDAK)
  let dataDAU = generateArray(dinasDAU)

  listSeluruhRekening = listSeluruhRekening.concat(dataAll)
  listSeluruhDAU = listSeluruhDAU.concat(dataDAU)
  listSeluruhDAK = listSeluruhDAK.concat(dataDAK)

  const listSeluruhRekeningWs = XLSX.utils.aoa_to_sheet(listSeluruhRekening)
  listSeluruhRekeningWs["!cols"] = [{ wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]
  const listSeluruhDAUWs = XLSX.utils.aoa_to_sheet(listSeluruhDAU)
  listSeluruhDAUWs["!cols"] = [{ wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]
  const listSeluruhDAKWs = XLSX.utils.aoa_to_sheet(listSeluruhDAK)
  listSeluruhDAKWs["!cols"] = [{ wpx: 275 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }]

  XLSX.utils.book_append_sheet(workbook, listSeluruhRekeningWs, 'SELURUH');
  XLSX.utils.book_append_sheet(workbook, listSeluruhDAUWs, 'DAU');
  XLSX.utils.book_append_sheet(workbook, listSeluruhDAKWs, 'DAK');
  XLSX.writeFile(workbook, "HITUNGAN UP.xlsx", { compression: true });
}

function cekRekening() {
  const xlf = './EXCEL/2025/rekening.xlsx'
  const xlb = fs.readFileSync(xlf)
  const wb = XLSX.read(xlb)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  let newData = listData.filter((x) => {
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

  let listAkun = reducer(newData, 'AKUN')

  const workbook = XLSX.utils.book_new();
  let listSeluruhRekening = [
    [
      { t: "s", v: "Kode", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "n", v: "Jumlah (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  ]
  for (const keyAkun in listAkun) {
    if (Object.prototype.hasOwnProperty.call(listAkun, keyAkun)) {
      const akun = listAkun[keyAkun];
      listSeluruhRekening.push([
        { t: "s", v: keyAkun, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
        { t: "n", v: total(akun, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      ])

      let listKelompokRaw = reducer(akun, 'KELOMPOK')
      let listKelompok = Object.keys(listKelompokRaw)
        .sort() // Mengurutkan secara default
        .reduce((acc, key) => {
          acc[key] = listKelompokRaw[key]; // Menyusun ulang objek berdasarkan urutan kunci
          return acc;
        }, {});

      for (const keyKelompok in listKelompok) {
        if (Object.prototype.hasOwnProperty.call(listKelompok, keyKelompok)) {
          const kelompok = listKelompok[keyKelompok];
          listSeluruhRekening.push([
            { t: "s", v: keyKelompok, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
            { t: "n", v: total(kelompok, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
          ])

          let listJenisRaw = reducer(kelompok, 'JENIS')
          let listJenis = Object.keys(listJenisRaw)
            .sort() // Mengurutkan secara default
            .reduce((acc, key) => {
              acc[key] = listJenisRaw[key]; // Menyusun ulang objek berdasarkan urutan kunci
              return acc;
            }, {});

          for (const keyJenis in listJenis) {
            if (Object.prototype.hasOwnProperty.call(listJenis, keyJenis)) {
              const jenis = listJenis[keyJenis];
              listSeluruhRekening.push([
                { t: "s", v: keyJenis, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                { t: "n", v: total(jenis, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
              ])

              let listObjekRaw = reducer(jenis, 'OBJEK')
              let listObjek = Object.keys(listObjekRaw)
                .sort() // Mengurutkan secara default
                .reduce((acc, key) => {
                  acc[key] = listObjekRaw[key]; // Menyusun ulang objek berdasarkan urutan kunci
                  return acc;
                }, {});

              for (const keyObjek in listObjek) {
                if (Object.prototype.hasOwnProperty.call(listObjek, keyObjek)) {
                  const objek = listObjek[keyObjek];
                  listSeluruhRekening.push([
                    { t: "s", v: keyObjek, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                    { t: "n", v: total(objek, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                  ])

                  let listRincianObjekRaw = reducer(objek, 'RINCIAN OBJEK')
                  let listRincianObjek = Object.keys(listRincianObjekRaw)
                    .sort() // Mengurutkan secara default
                    .reduce((acc, key) => {
                      acc[key] = listRincianObjekRaw[key]; // Menyusun ulang objek berdasarkan urutan kunci
                      return acc;
                    }, {});

                  for (const keyRincianObjek in listRincianObjek) {
                    if (Object.prototype.hasOwnProperty.call(listRincianObjek, keyRincianObjek)) {
                      const rincianObjek = listRincianObjek[keyRincianObjek];
                      listSeluruhRekening.push([
                        { t: "s", v: keyRincianObjek, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                        { t: "n", v: total(rincianObjek, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                      ])

                      let listSubRincianObjekRaw = reducer(rincianObjek, 'SUB RINCIAN OBJEK')
                      let listSubRincianObjek = Object.keys(listSubRincianObjekRaw)
                        .sort() // Mengurutkan secara default
                        .reduce((acc, key) => {
                          acc[key] = listSubRincianObjekRaw[key]; // Menyusun ulang objek berdasarkan urutan kunci
                          return acc;
                        }, {});

                      for (const keySubRincianObjek in listSubRincianObjek) {
                        if (Object.prototype.hasOwnProperty.call(listSubRincianObjek, keySubRincianObjek)) {
                          const subRincianObjek = listSubRincianObjek[keySubRincianObjek];
                          listSeluruhRekening.push([
                            { t: "s", v: keySubRincianObjek, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                            { t: "n", v: total(subRincianObjek, 'PAGU'), s: { font: { bold: true, name: "Calibri", sz: 9 } } },
                          ])
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
    }
  }

  const listSeluruhRekeningWs = XLSX.utils.aoa_to_sheet(listSeluruhRekening)
  XLSX.utils.book_append_sheet(workbook, listSeluruhRekeningWs, 'REKENING AKUN');
  XLSX.writeFile(workbook, "LIST REKENING.xlsx", { compression: true });
}

function efisiensi() {
  const xlf = './EXCEL/2025/rekap3.xlsx'
  const xlb = fs.readFileSync(xlf)
  const wb = XLSX.read(xlb)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  let newData = listData.filter((x) => {
    if (typeof x['KODE REKENING'] !== 'undefined') {
      let induk = x['KODE REKENING'].substring(0, 9)
      x['INDUK'] = induk
      return x
    }
  })

  let newDAK = newData.filter((x) => {
    if (/DAK/.test(x['NAMA SUMBER DANA']) || /Alokasi Khusus/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  let newDAU = newData.filter((x) => {
    if (!/DAK/.test(x['NAMA SUMBER DANA']) && !/Alokasi Khusus/.test(x['NAMA SUMBER DANA']) && !/yang Ditentukan Penggunaannya/.test(x['NAMA SUMBER DANA']) && !/Tambahan Dukungan/.test(x['NAMA SUMBER DANA']) && !/Pajak/.test(x['NAMA SUMBER DANA']) && !/Retribusi/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  let newRetribusiPajak = newData.filter((x) => {
    if (/Pajak/.test(x['NAMA SUMBER DANA']) || /Retribusi/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  let newDAUPeruntukkan = newData.filter((x) => {
    if (/yang Ditentukan Penggunaannya/.test(x['NAMA SUMBER DANA']) || /Tambahan Dukungan/.test(x['NAMA SUMBER DANA'])) {
      return x
    }
  })

  const dinasAll = reducer(newData, 'KODE SUB UNIT')
  const dinasDAK = reducer(newDAK, 'KODE SUB UNIT')
  const dinasDAU = reducer(newDAU, 'KODE SUB UNIT')
  const dinasRetribusiPajak = reducer(newRetribusiPajak, 'KODE SUB UNIT')
  const dinasDAUPeruntukkan = reducer(newDAUPeruntukkan, 'KODE SUB UNIT')

  const workbook = XLSX.utils.book_new();

  let listSeluruhRekening = listSeluruhDAU = listSeluruhDAK = listSeluruhDAUPeruntukkan = listSeluruhRetribusiPajak = [
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Operasi", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Modal", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Tidak Terduga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bagi Hasil", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      { t: "s", v: "Belanja Bantuan Keuangan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "TOTAL", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ],
    [
      null,
      { t: "s", v: "Belanja Pegawai", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Barang dan Jasa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Hibah", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      { t: "s", v: "Belanja Bantuan Sosial", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      { t: "s", v: "Belanja Modal Tanah", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Peralatan Mesin", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { t: "s", v: "Belanja Modal Gedung dan Bangunan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      { t: "s", v: "Belanja Modal Jalan, Jaringan dan Irigasi", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      null,
      { t: "s", v: "Belanja Modal Aset Tetap Lainnya", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      { t: "s", v: "Belanja Modal Aset Lainnya", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Tidak Terduga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bagi Hasil", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      null,
      { t: "s", v: "Belanja Bantuan Keuangan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ],
    [
      null,
      { t: "s", v: "Belanja Gaji dan Tunjangan ASN", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Tambahan Penghasilan ASN", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Gaji dan Tunjangan DPRD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Gaji dan Tunjangan KDH/WKDH", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Penerimaan Lainnya Pimpinan DPRD serta KDH/WKDH", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Barang", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Jasa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Pemeliharaan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Perjalanan Dinas", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Uang dan/atau Jasa untuk Diberikan kepada Pihak Ketiga/Pihak Lain/Masyarakat", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Barang dan Jasa BOK Puskesmas", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Hibah kepada Pemerintah Pusat", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Hibah kepada Badan, Lembaga, Organisasi Kemasyarakatan yang Berbadan Hukum Indonesia", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Hibah Dana BOSP", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Sosial kepada Individu", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Sosial kepada Kelompok Masyarakat", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Sosial kepada Lembaga Non Pemerintahan (Bidang Pendidikan, Keagamaan dan Bidang Lainnya)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Tanah", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Besar", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Angkutan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Bengkel dan Alat Ukur", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Pertanian", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Kantor dan Rumah Tangga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Studio, Komunikasi, dan Pemancar", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Kedokteran dan Kesehatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Laboratorium", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Komputer", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Alat Produksi, Pengolahan dan Pemurnian", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Peralatan Olahraga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Peralatan dan Mesin BOS", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Bangunan Gedung", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Tugu Titik Kontrol/Pasti", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Jalan dan Jembatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Bangunan Air", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Instalasi", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Bahan Perpustakaan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Aset Tetap Lainnya BOS", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Modal Aset Lainnya-Aset Tidak Berwujud", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Tidak Terduga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bagi Hasil Pajak Daerah Kepada Pemerintahan Kabupaten atau Kota dan Desa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bagi Hasil Retribusi Daerah Kabupaten atau Kota Kepada Pemerintah Desa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Belanja Bantuan Keuangan Daerah Provinsi atau Kabupaten/Kota kepada Desa", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  ]

  let dataAll = generateEfisiensi(dinasAll)
  let dataDAK = generateEfisiensi(dinasDAK)
  let dataDAU = generateEfisiensi(dinasDAU)
  let dataRetribusiPajak = generateEfisiensi(dinasRetribusiPajak)
  let dataDAUPeruntukkan = generateEfisiensi(dinasDAUPeruntukkan)

  listSeluruhRekening = listSeluruhRekening.concat(dataAll)
  listSeluruhDAU = listSeluruhDAU.concat(dataDAU)
  listSeluruhDAK = listSeluruhDAK.concat(dataDAK)
  listSeluruhRetribusiPajak = listSeluruhRetribusiPajak.concat(dataRetribusiPajak)
  listSeluruhDAUPeruntukkan = listSeluruhDAUPeruntukkan.concat(dataDAUPeruntukkan)

  const listSeluruhRekeningWs = XLSX.utils.aoa_to_sheet(listSeluruhRekening)
  const listSeluruhDAUWs = XLSX.utils.aoa_to_sheet(listSeluruhDAU)
  const listSeluruhDAKWs = XLSX.utils.aoa_to_sheet(listSeluruhDAK)
  const listSeluruhRetribusiPajakWs = XLSX.utils.aoa_to_sheet(listSeluruhRetribusiPajak)
  const listSeluruhDAUPeruntukkanWs = XLSX.utils.aoa_to_sheet(listSeluruhDAUPeruntukkan)

  XLSX.utils.book_append_sheet(workbook, listSeluruhRekeningWs, 'SELURUH');
  XLSX.utils.book_append_sheet(workbook, listSeluruhDAUWs, 'DAU');
  XLSX.utils.book_append_sheet(workbook, listSeluruhRetribusiPajakWs, 'RETRIBUSI PAJAK');
  XLSX.utils.book_append_sheet(workbook, listSeluruhDAUPeruntukkanWs, 'DAU PERUNTUKKAN');
  XLSX.utils.book_append_sheet(workbook, listSeluruhDAKWs, 'DAK');
  XLSX.writeFile(workbook, "PENGHEMATAN.xlsx", { compression: true });

}


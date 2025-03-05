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

function format(x) {
  let a = Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(x)
  a = a.replace("Rp", "Rp.")
  return a
}

function cekSumberDana(xlf, listPMK, listSumberDanaSIPD, namaFile) {
  const xlb = fs.readFileSync(xlf)
  const wb = XLSX.read(xlb)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
  // console.log(listData)
  const listDinas = reducer(listData, 'KODE SUB UNIT')
  let all = []
  let sdAll = []
  let totalPagu = []
  let gajiTunjanganPNS = []
  let gajiTunjanganP3K = []
  sdAll.push(
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Total Pagu (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  )

  totalPagu.push(
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Total Pagu (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "GAJI ASN + TPP (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ]
  )


  gajiTunjanganPNS.push(
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Gaji Pokok PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Keluarga PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Jabatan PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Fungsional PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Fungsional Umum PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Beras PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan PPh/Tunjangan Khusus PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Pembulatan Gaji PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kesehatan PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kecelakaan Kerja PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kematian PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Tambahan Penghasilan berdasarkan Beban Kerja PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Tambahan Penghasilan berdasarkan Tempat Bertugas PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Tambahan Penghasilan berdasarkan Kondisi Kerja PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Tambahan Penghasilan berdasarkan Kelangkaan Profesi PNS", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Tambahan Penghasilan berdasarkan Pertimbangan Objektif Lainnya", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
    ]
  )

  gajiTunjanganP3K.push(
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Gaji Pokok PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Keluarga PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Jabatan PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Fungsional PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Fungsional Umum PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan Beras PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Tunjangan PPh/Tunjangan Khusus PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Pembulatan Gaji PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kesehatan PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kecelakaan Kerja PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      { t: "s", v: "Belanja Iuran Jaminan Kematian PPPK", s: { font: { bold: true, name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },

    ]
  )


  const workbook = XLSX.utils.book_new();
  all.push(
    [
      { t: "s", v: "Kode", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Mutakhir", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Pagu Indikatif (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode PMK", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Bidang", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Pagu Diberi (Rp)", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ],
  )
  for (const key in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, key)) {
      const element = listDinas[key];

      // if(key !== 'Dinas Pendidikan dan Kebudayaan'){
      //   break
      // }
      let arrTotalPagu = [
        { t: "s", v: element[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
        { t: "n", v: total(element, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } },
      ]

      let listSubkegiatan = reducer(element, 'KODE SUB KEGIATAN')

      for (const keyListSubkegiatan in listSubkegiatan) {
        if (Object.hasOwnProperty.call(listSubkegiatan, keyListSubkegiatan)) {
          const subkegiatan = listSubkegiatan[keyListSubkegiatan];

          if (element[0]['NAMA SUB UNIT'] === 'Sekretariat Daerah') {
            continue
          }

          if (subkegiatan[0]['NAMA SUB KEGIATAN'] === 'Penyediaan Gaji dan Tunjangan ASN') {
            let arrGajiPNS = []
            let arrGajiP3K = []
            for (let index = 0; index < 16; index++) {
              arrGajiPNS.push({ t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } })
            }

            for (let index = 0; index < 11; index++) {
              arrGajiP3K.push({ t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } })
            }

            arrTotalPagu.push(
              { t: "n", v: total(subkegiatan, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
            )

            let listKodeRekening = reducer(subkegiatan, 'KODE REKENING')
            for (const keyKodeRekening in listKodeRekening) {
              if (Object.hasOwnProperty.call(listKodeRekening, keyKodeRekening)) {
                const kodeRekening = listKodeRekening[keyKodeRekening];

                if (keyKodeRekening === '5.1.01.01.01.0001') {
                  arrGajiPNS[0] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === '5.1.01.01.02.0001') {
                  arrGajiPNS[1] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.03.0001") {
                  arrGajiPNS[2] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.04.0001") {
                  arrGajiPNS[3] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.05.0001") {
                  arrGajiPNS[4] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.06.0001") {
                  arrGajiPNS[5] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.07.0001") {
                  arrGajiPNS[6] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.08.0001") {
                  arrGajiPNS[7] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.09.0001") {
                  arrGajiPNS[8] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.10.0001") {
                  arrGajiPNS[9] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.11.0001") {
                  arrGajiPNS[10] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.02.01.0001") {
                  arrGajiPNS[11] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.02.02.0001") {
                  arrGajiPNS[12] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.02.03.0001") {
                  arrGajiPNS[13] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.02.04.0001") {
                  arrGajiPNS[14] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                // P3K

                if (keyKodeRekening === "5.1.01.01.01.0002") {
                  arrGajiP3K[0] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.02.0002") {
                  arrGajiP3K[1] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.03.0002") {
                  arrGajiP3K[2] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.04.0002") {
                  arrGajiP3K[3] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.05.0002") {
                  arrGajiP3K[4] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.06.0002") {
                  arrGajiP3K[5] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.07.0002") {
                  arrGajiP3K[6] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.08.0002") {
                  arrGajiP3K[7] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.09.0002") {
                  arrGajiP3K[8] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.10.0002") {
                  arrGajiP3K[9] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }

                if (keyKodeRekening === "5.1.01.01.11.0002") {
                  arrGajiP3K[10] = { t: "n", v: total(kodeRekening, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                }
              }
            }

            const excluded = ['5.1.01.03.03', '5.1.01.03.04', '5.1.01.03.05']; // todo: excluded in 2025
            const startsWithValue = '5.1.01.02.06'; // 2024: 5.1.01.03, 2025: 5.1.01.02.06

            let totalTPPPertimbanganObyektif = subkegiatan
              .filter(item => item['KODE REKENING'].startsWith(startsWithValue) &&
                !excluded.some(exclude => item['KODE REKENING'].startsWith(exclude)))
              .reduce((sum, item) => sum + item.PAGU, 0);

            arrGajiPNS[15] = { t: "n", v: totalTPPPertimbanganObyektif, s: { font: { name: "Calibri", sz: 9 } } }

            arrGajiPNS.unshift({ t: "s", v: element[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } })
            arrGajiP3K.unshift({ t: "s", v: element[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } })
            gajiTunjanganPNS.push(arrGajiPNS)
            gajiTunjanganP3K.push(arrGajiP3K)
          }

          let kodePmk = null
          let bidangPmk = null
          let paguPmk = null

          if (!/Puskesmas/.test(element[0]['NAMA SUB UNIT'])) {
            let cariSubkegiatanPmk = listPMK.filter(item =>
              Array.isArray(item.kode)
                ? item.kode.includes(subkegiatan[0]['KODE SUB KEGIATAN'])
                : item.kode === subkegiatan[0]['KODE SUB KEGIATAN']
            )

            if (cariSubkegiatanPmk.length === 1) {
              kodePmk = { t: "s", v: cariSubkegiatanPmk[0].kode, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
              bidangPmk = { t: "s", v: cariSubkegiatanPmk[0].bidang, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
              paguPmk = { t: "n", v: cariSubkegiatanPmk[0].pagu, s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
            } else {
              kodePmk = { t: "s", v: mapper(cariSubkegiatanPmk, 'kode').join(', '), s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
              bidangPmk = { t: "s", v: mapper(cariSubkegiatanPmk, 'bidang').join(', '), s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
              paguPmk = { t: "n", v: mapper(cariSubkegiatanPmk, 'pagu').join(', '), s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true } } }
            }
          }

          let listSumberDana = reducer(subkegiatan, 'KODE SUMBER DANA')
          for (const keySumberDana in listSumberDana) {
            if (Object.hasOwnProperty.call(listSumberDana, keySumberDana)) {
              const sumberDana = listSumberDana[keySumberDana];
              let arrSd = [];
              if (keySumberDana === 'undefined') {
                arrSd.push(
                  { t: "s", v: subkegiatan[0]['KODE SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: subkegiatan[0]['NAMA SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
                  { t: "s", v: "-", s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: "-", s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: "-", s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "n", v: total(sumberDana, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: subkegiatan[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
                  kodePmk,
                  bidangPmk,
                  paguPmk
                )
              } else {
                let isMutakhir = listSumberDanaSIPD.some(item => item.kode_dana === sumberDana[0]['KODE SUMBER DANA'])
                arrSd.push(
                  { t: "s", v: subkegiatan[0]['KODE SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: subkegiatan[0]['NAMA SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
                  { t: "s", v: sumberDana[0]['KODE SUMBER DANA'], s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: sumberDana[0]['NAMA SUMBER DANA'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
                  { t: "s", v: !isMutakhir ? 'FALSE' : 'TRUE', s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "n", v: total(sumberDana, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } },
                  { t: "s", v: subkegiatan[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
                  kodePmk,
                  bidangPmk,
                  paguPmk
                )
              }
              all.push(
                arrSd
              )
            }
          }
        }
      }

      totalPagu.push(
        arrTotalPagu
      )

      let listSD = reducer(element, 'NAMA SUMBER DANA')
      for (const sd in listSD) {
        if (Object.hasOwnProperty.call(listSD, sd)) {
          const SD = listSD[sd];
          sdAll.push(
            [
              { t: "s", v: element[0]['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
              { t: "s", v: SD[0]['KODE SUMBER DANA'] ?? '-', s: { font: { name: "Calibri", sz: 9 } } },
              { t: "s", v: SD[0]['NAMA SUMBER DANA'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
              { t: "n", v: total(SD, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } },
            ]
          )
        }
      }

    }
  }

  const worksheet = XLSX.utils.aoa_to_sheet(all);
  worksheet["!cols"] = [{ wpx: 80 }, { wpx: 275 }, { wpx: 80 }, { wpx: 200 }, { wpx: 85 }, { wpx: 90 }, { wpx: 80 }, { wpx: 60 }, { wpx: 75 }];
  const sdAllWs = XLSX.utils.aoa_to_sheet(sdAll);
  sdAllWs["!cols"] = [{ wpx: 125 }, { wpx: 80 }, { wpx: 250 }, { wpx: 85 }];
  const totalPaguWs = XLSX.utils.aoa_to_sheet(totalPagu);
  totalPaguWs["!cols"] = [{ wpx: 125 }, { wpx: 80 }, { wpx: 80 }];
  const gajiTunjanganPNSWs = XLSX.utils.aoa_to_sheet(gajiTunjanganPNS);
  gajiTunjanganPNSWs["!cols"] = [{ wpx: 125 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }];
  const gajiTunjanganP3KWs = XLSX.utils.aoa_to_sheet(gajiTunjanganP3K);
  gajiTunjanganP3KWs["!cols"] = [{ wpx: 125 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }, { wpx: 80 }];

  XLSX.utils.book_append_sheet(workbook, worksheet, 'SUMBER DANA PER SUBKEGIATAN');
  XLSX.utils.book_append_sheet(workbook, sdAllWs, 'SUMBER DANA PER OPD');
  XLSX.utils.book_append_sheet(workbook, totalPaguWs, 'PAGU PER OPD');
  XLSX.utils.book_append_sheet(workbook, gajiTunjanganPNSWs, 'GAJI PNS PER OPD');
  XLSX.utils.book_append_sheet(workbook, gajiTunjanganP3KWs, 'GAJI P3K PER OPD');
  XLSX.writeFile(workbook, namaFile, { compression: true });
}

function s(xlf) {
  const xlb = fs.readFileSync(xlf)
  const wb = XLSX.read(xlb)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
  // console.log(listData)
  const workbook = XLSX.utils.book_new();
  let all = [];
  all.push(
    [
      { t: "s", v: "Nama OPD", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Sub Kegiatan", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Sumber Dana", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Mutakhir", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Rekening", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Nama Rekening", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Kode Standar Harga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
      { t: "s", v: "Nama Standar Harga", s: { font: { bold: true, name: "Calibri", sz: 9 } } },
    ],
  )

  for (const key in listData) {
    if (Object.prototype.hasOwnProperty.call(listData, key)) {
      const element = listData[key];
      let isMutakhir = listSumberDanaSIPD.some(item => item.kode_dana === element['KODE SUMBER DANA'])
      all.push([
        { t: "s", v: element['NAMA SUB UNIT'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
        { t: "s", v: element['KODE SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['NAMA SUB KEGIATAN'], s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
        { t: "s", v: element['KODE SUMBER DANA'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['NAMA SUMBER DANA'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['KODE SUMBER DANA'] ? (!isMutakhir ? "FALSE" : "TRUE") : 'TRUE', s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['KODE REKENING'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['NAMA REKENING'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
        { t: "s", v: element['KODE STANDAR HARGA'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { vertical: 'center' } } },
        { t: "s", v: element['NAMA STANDAR HARGA'] ?? '-', s: { font: { name: "Calibri", sz: 9 }, alignment: { wrapText: true, vertical: 'center' } } },
      ])
    }
  }

  const worksheet = XLSX.utils.aoa_to_sheet(all);
  worksheet["!cols"] = [{ wpx: 75 }, { wpx: 80 }, { wpx: 275 }, { wpx: 80 }, { wpx: 200 }, { wpx: 85 }, { wpx: 90 }, { wpx: 80 }, { wpx: 120 }, { wpx: 80 }];
  XLSX.utils.book_append_sheet(workbook, worksheet, 'MUTAKHIR');
  XLSX.writeFile(workbook, "MUTAKHIR.xlsx", { compression: true });
}

const xlf = './EXCEL/2025/rekap3.xlsx'
const listPMK = require('./JSON/2025/pmk-110.json') // 2024 pmk-110-dari-sikd-terisi-anggaran. 2025 pmk-110
const listSumberDanaSIPD = require('./JSON/2025/sumber_dana.json')
let namaFile = 'PAGU OPD 2025.xlsx'

cekSumberDana(xlf, listPMK, listSumberDanaSIPD, namaFile)
// s(xlf)


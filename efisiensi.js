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

function pushItemPlusNull(arr, value, count) {
  arr.push(value);
  for (let i = 0; i < (count * 6) - 1; i++) {
    arr.push(null);
  }
}

function pushFiveTemplate(arr) {
  arr.push(
    "Murni",
    "Input",
    "Δ I",
    "Efisiensi",
    "Δ E",
    "Persentase"
  );
}

function pushNamaPerItem(namaArr, templArr, data) {
  for (const item of data) {
    pushItemPlusNull(namaArr, item.rekening, 1);
    pushFiveTemplate(templArr);
  }
  pushItemPlusNull(namaArr, "Rekening Lainnya", 1);
  pushFiveTemplate(templArr);
  pushItemPlusNull(namaArr, "Total", 1);
  pushFiveTemplate(templArr);
}

function format(x) {
  let a = Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(x)
  a = a.replace("Rp", "Rp.")
  return a
}

function buildHeader(data, rek1, rek2) {
  let header = []
  for (const [i, v] of data.entries()) {
    header[i] = []
    for (const vv of v) {
      if (vv == null) {
        header[i].push(null)
      } else {
        if (i == 1) {
          let namaRekening = getRekening(vv, rek1) || getRekening(vv, rek2)
          // console.log(namaRekening)
          if (!namaRekening) {
            header[i].push({ t: "s", v: vv, s: { font: { bold: true, name: "Calibri", sz: 9 } } })
          } else {
            header[i].push({ t: "s", v: namaRekening.nama, s: { font: { bold: true, name: "Calibri", sz: 9 } } })
          }
        } else {
          header[i].push({ t: "s", v: vv, s: { font: { bold: true, name: "Calibri", sz: 9 } } })
        }
      }
    }
  }

  return header
}

const getRekening = (rekening, list) => list.find(x => x.rekening === rekening);

function pemotongan() {
  const xlf = './EXCEL/2025/rekap_efisiensi.xlsx'
  const xlfMurni = './EXCEL/2025/rekap_murni.xlsx'
  const xlb = fs.readFileSync(xlf)
  const xlbMurni = fs.readFileSync(xlfMurni)
  const wb = XLSX.read(xlb)
  const wbMurni = XLSX.read(xlbMurni)
  let listData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
  let listDataMurni = XLSX.utils.sheet_to_json(wbMurni.Sheets[wbMurni.SheetNames[0]])

  const workbookSubkegiatan = XLSX.utils.book_new();
  const workbookDinas = XLSX.utils.book_new();

  const efisiensiDau = [
    { "rekening": "5.1.02.04.01.0001", "nama": "Belanja Perjalanan Dinas Biasa", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0002", "nama": "Belanja Perjalanan Dinas Tetap", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0003", "nama": "Belanja Perjalanan Dinas Dalam Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0004", "nama": "Belanja Perjalanan Dinas Paket Meeting Dalam Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0005", "nama": "Belanja Perjalanan Dinas Paket Meeting Luar Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.01.01.0004", "nama": "Belanja Bahan-Bahan Bakar dan Pelumas", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0024", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0025", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor- Kertas dan Cover", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0026", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor- Bahan Cetak", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0043", "nama": "Belanja Natura dan Pakan-Natura", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0052", "nama": "Belanja Makanan dan Minuman Rapat", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0053", "nama": "Belanja Makanan dan Minuman Jamuan Tamu", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0058", "nama": "Belanja Makanan dan Minuman Aktivitas Lapangan", "persentase": 0.35, },
    { "rekening": "5.1.02.02.01.0052", "nama": "Belanja Jasa Pembersihan, Pengendalian Hama, dan Fumigasi", "persentase": 0.35, },
    { "rekening": "5.1.02.03.02.0035", "nama": "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Dinas Bermotor Perorangan", "persentase": 0.35, },
    { "rekening": "5.1.02.03.02.0036", "nama": "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Bermotor Penumpang", "persentase": 0.35, },
    { "rekening": "5.2.02.05.02.0001", "nama": "Belanja Modal Mebel", "persentase": 0.35, },
    { "rekening": "5.2.02.05.02.0006", "nama": "Belanja Modal Alat Rumah Tangga Lainnya (Home Use)", "persentase": 0.35, },
    { "rekening": "5.2.02.10.01.0002", "nama": "Belanja Modal Personal Computer", "persentase": 0.7, },
  ]

  const efisiensiDauPeruntukkan = [
    { "rekening": "5.1.02.04.01.0001", "nama": "Belanja Perjalanan Dinas Biasa", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0002", "nama": "Belanja Perjalanan Dinas Tetap", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0003", "nama": "Belanja Perjalanan Dinas Dalam Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0004", "nama": "Belanja Perjalanan Dinas Paket Meeting Dalam Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.04.01.0005", "nama": "Belanja Perjalanan Dinas Paket Meeting Luar Kota", "persentase": 0.5, },
    { "rekening": "5.1.02.01.01.0004", "nama": "Belanja Bahan-Bahan Bakar dan Pelumas", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0024", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0025", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor- Kertas dan Cover", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0043", "nama": "Belanja Natura dan Pakan-Natura", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0052", "nama": "Belanja Makanan dan Minuman Rapat", "persentase": 0.35, },
    { "rekening": "5.1.02.01.01.0058", "nama": "Belanja Makanan dan Minuman Aktivitas Lapangan", "persentase": 0.35, },
    { "rekening": "5.1.05.05.02.0001", "nama": "Belanja Hibah Uang kepada Badan dan Lembaga Nirlaba, Sukarela dan Sosial yang Telah Memiliki Surat Keterangan Terdaftar", "persentase": 0.3, },
  ]

  let listEfisiensiDinas = [
    [
      "Kode SKPD",
      "SKPD"
    ],
    [
      null,
      null,
    ],
    [
      null,
      null,
    ]
  ]

  pushItemPlusNull(listEfisiensiDinas[0], "DAU UMUM", efisiensiDau.length + 2);
  pushItemPlusNull(listEfisiensiDinas[0], "DAU PERUNTUKKAN", efisiensiDauPeruntukkan.length + 2);
  pushNamaPerItem(listEfisiensiDinas[1], listEfisiensiDinas[2], efisiensiDau);
  pushNamaPerItem(listEfisiensiDinas[1], listEfisiensiDinas[2], efisiensiDauPeruntukkan);
  pushItemPlusNull(listEfisiensiDinas[0], "Grand Total", 1);
  pushItemPlusNull(listEfisiensiDinas[1], "Grand Total", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);
  pushItemPlusNull(listEfisiensiDinas[0], "Belanja Perjalanan Dinas", 2);
  pushItemPlusNull(listEfisiensiDinas[1], "DAU UMUM", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);
  pushItemPlusNull(listEfisiensiDinas[1], "DAU PERUNTUKKAN", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);
  pushItemPlusNull(listEfisiensiDinas[1], "GRAND TOTAL", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);

  let dataPerDinas = buildHeader(listEfisiensiDinas, efisiensiDau, efisiensiDauPeruntukkan)

  const rekeningEfisiensiDau = efisiensiDau.map(x => x.rekening)
  const rekeningEfisiensiDauPeruntukkan = efisiensiDauPeruntukkan.map(x => x.rekening)

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

  let newDataMurni = listDataMurni.filter((x) => {
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

  // console.log(newDataMurni)

  let listDinas = reducer(newData, 'KODE SUB UNIT')
  for (const keyDinas in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, keyDinas)) {
      const dinas = listDinas[keyDinas]
      // console.log(dinas)

      if (/Puskesmas/.test(dinas[0]['NAMA SUB UNIT'])) {
        continue;
      }

      let rincianPerDinas = []

      rincianPerDinas.push(
        { t: "s", v: dinas[0]['KODE SUB UNIT'], s: { font: { bold: true, name: "Calibri", sz: 9 } } },
        { t: "s", v: dinas[0]['NAMA SUB UNIT'], s: { font: { bold: true, name: "Calibri", sz: 9 } } }
      )

      for (let index = 2; index < listEfisiensiDinas[2].length - 1; index++) {
        rincianPerDinas[index] = null;
      }

      let listSubkegiatan = reducer(dinas, 'KODE SUB KEGIATAN')
      // console.log(listSubkegiatan)
      let listSubkegiatanDinas = [
        [
          "Kode Sub Kegiatan",
          "Nama Sub Kegiatan",
        ],
        [
          null,
          null,
        ],
        [
          null,
          null,
        ],
      ]

      pushItemPlusNull(listSubkegiatanDinas[0], "DAU UMUM", efisiensiDau.length + 2);
      pushItemPlusNull(listSubkegiatanDinas[0], "DAU PERUNTUKKAN", efisiensiDauPeruntukkan.length + 2);
      pushNamaPerItem(listSubkegiatanDinas[1], listSubkegiatanDinas[2], efisiensiDau);
      pushNamaPerItem(listSubkegiatanDinas[1], listSubkegiatanDinas[2], efisiensiDauPeruntukkan);

      let dataPerSubKegiatan = buildHeader(listSubkegiatanDinas, efisiensiDau, efisiensiDauPeruntukkan)
      // console.log(listSubkegiatanDinas)

      for (const keyListSubkegiatan in listSubkegiatan) {
        if (Object.hasOwnProperty.call(listSubkegiatan, keyListSubkegiatan)) {
          const subkegiatan = listSubkegiatan[keyListSubkegiatan]
          let rincianSubKegiatan = []
          rincianSubKegiatan.push(
            { t: "s", v: keyListSubkegiatan, s: { font: { bold: true, name: "Calibri", sz: 9 } } },
            { t: "s", v: subkegiatan[0]['NAMA SUB KEGIATAN'], s: { font: { bold: true, name: "Calibri", sz: 9 } } }
          )

          for (let index = 2; index < listSubkegiatanDinas[2].length - 1; index++) {
            rincianSubKegiatan[index] = null;
          }

          let newDAU = subkegiatan.filter((x) => {
            if (isDAUUmum(x['NAMA SUMBER DANA'])) {
              return x
            }
          })

          let newDAUPeruntukkan = subkegiatan.filter((x) => {
            if (isDAUPeruntukkan(x['NAMA SUMBER DANA'])) {
              return x
            }
          })

          if (newDAU.length) {
            // console.log("DAU UMUM")
            let totalEfisiensi = 0
            let totalBelanjaRekeningMurni = 0
            let totalBelanjaRekeningInput = 0
            let totalBelanjaRekeningLainnyaMurni = 0
            let totalBelanjaRekeningLainnyaInput = 0
            let listSubkegiatanMurni = newDataMurni.filter(x =>
              x['KODE SUB UNIT'] === keyDinas &&
              x['KODE SUB KEGIATAN'] === keyListSubkegiatan &&
              isDAUUmum(x['NAMA SUMBER DANA'])
            );

            // console.log(listSubkegiatanMurni);
            let paguDAUMurni = total(listSubkegiatanMurni, 'PAGU')
            let paguDAUInput = total(newDAU, 'PAGU')
            let selisihInput = paguDAUInput - paguDAUMurni
            // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], paguDAUMurni, paguDAUInput, selisihInput)
            rincianSubKegiatan[122] = { t: "n", v: paguDAUMurni, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[123] = { t: "n", v: paguDAUInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[124] = { t: "n", v: selisihInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            let listBelanja = reducer(newDAU, 'SUB RINCIAN OBJEK')
            for (const keyBelanja in listBelanja) {
              if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
                const belanja = listBelanja[keyBelanja];
                let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
                  x['SUB RINCIAN OBJEK'] === keyBelanja
                )
                let belanjaMurni = { t: "n", v: total(listBelanjaKegiatanMurni, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                let belanjaInput = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)
                let efisiensiBelanja = 0
                let deltaInput = 0
                let deltaEfisiensi = 0

                if (!rekeningEfisiensiDau.includes(keyBelanja)) {
                  totalBelanjaRekeningLainnyaMurni += belanjaMurni.v
                  totalBelanjaRekeningLainnyaInput += belanjaInput.v
                } else {
                  if (keyBelanja === '5.1.02.04.01.0001') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[2] = belanjaMurni
                    rincianSubKegiatan[3] = belanjaInput
                    rincianSubKegiatan[4] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[5] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[6] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[7] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0002') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[8] = belanjaMurni
                    rincianSubKegiatan[9] = belanjaInput
                    rincianSubKegiatan[10] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[11] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[12] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[13] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0003') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[14] = belanjaMurni
                    rincianSubKegiatan[15] = belanjaInput
                    rincianSubKegiatan[16] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[17] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[18] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[19] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0004') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[20] = belanjaMurni
                    rincianSubKegiatan[21] = belanjaInput
                    rincianSubKegiatan[22] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[23] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[24] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[25] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0005') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[26] = belanjaMurni
                    rincianSubKegiatan[27] = belanjaInput
                    rincianSubKegiatan[28] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[29] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[30] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[31] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0004') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[32] = belanjaMurni
                    rincianSubKegiatan[33] = belanjaInput
                    rincianSubKegiatan[34] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[35] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[36] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[37] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0024') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[38] = belanjaMurni
                    rincianSubKegiatan[39] = belanjaInput
                    rincianSubKegiatan[40] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[41] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[42] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[43] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0025') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[44] = belanjaMurni
                    rincianSubKegiatan[45] = belanjaInput
                    rincianSubKegiatan[46] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[47] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[48] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[49] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0026') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[50] = belanjaMurni
                    rincianSubKegiatan[51] = belanjaInput
                    rincianSubKegiatan[52] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[53] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[54] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[55] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0043') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[56] = belanjaMurni
                    rincianSubKegiatan[57] = belanjaInput
                    rincianSubKegiatan[58] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[59] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[60] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[61] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0052') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[62] = belanjaMurni
                    rincianSubKegiatan[63] = belanjaInput
                    rincianSubKegiatan[64] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[65] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[66] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[67] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0053') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[68] = belanjaMurni
                    rincianSubKegiatan[69] = belanjaInput
                    rincianSubKegiatan[70] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[71] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[72] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[73] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0058') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[74] = belanjaMurni
                    rincianSubKegiatan[75] = belanjaInput
                    rincianSubKegiatan[76] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[77] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[78] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[79] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.02.01.0052') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[80] = belanjaMurni
                    rincianSubKegiatan[81] = belanjaInput
                    rincianSubKegiatan[82] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[83] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[84] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[85] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.03.02.0035') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[86] = belanjaMurni
                    rincianSubKegiatan[87] = belanjaInput
                    rincianSubKegiatan[88] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[89] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[90] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[91] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.03.02.0036') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[92] = belanjaMurni
                    rincianSubKegiatan[93] = belanjaInput
                    rincianSubKegiatan[94] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[95] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[96] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[97] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.2.02.05.02.0001') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[98] = belanjaMurni
                    rincianSubKegiatan[99] = belanjaInput
                    rincianSubKegiatan[100] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[101] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[102] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[103] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.2.02.05.02.0006') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[104] = belanjaMurni
                    rincianSubKegiatan[105] = belanjaInput
                    rincianSubKegiatan[106] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[107] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[108] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[109] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.2.02.10.01.0002') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.7 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[110] = belanjaMurni
                    rincianSubKegiatan[111] = belanjaInput
                    rincianSubKegiatan[112] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[113] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[114] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[115] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }
                }
              }
            }

            rincianSubKegiatan[125] = { t: "n", v: totalEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[126] = { t: "n", v: totalEfisiensi - selisihInput, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[127] = { t: "n", v: (selisihInput / totalEfisiensi) * 100, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[116] = { t: "n", v: totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[117] = { t: "n", v: totalBelanjaRekeningLainnyaInput, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[118] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[119] = { t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[120] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[121] = { t: "n", v: (totalBelanjaRekeningLainnyaInput / totalBelanjaRekeningLainnyaMurni) * 100, s: { font: { name: "Calibri", sz: 9 } } }
            // console.log("Total Belanja Rekening Murni", totalBelanjaRekeningMurni, totalBelanjaRekeningInput, totalBelanjaRekeningMurni - totalBelanjaRekeningInput)
            // console.log("Total Belanja Rekening Lainnya Murni", totalBelanjaRekeningLainnyaMurni, totalBelanjaRekeningLainnyaInput, totalBelanjaRekeningLainnyaMurni - totalBelanjaRekeningLainnyaInput)
            // console.log("=============================================")
            // console.log("DAU", newDAU)
          }

          if (newDAUPeruntukkan.length) {
            // console.log("DAU PERUNTUKKAN")
            let totalEfisiensi = 0
            let totalBelanjaRekeningMurni = 0
            let totalBelanjaRekeningInput = 0
            let totalBelanjaRekeningLainnyaMurni = 0
            let totalBelanjaRekeningLainnyaInput = 0
            let listSubkegiatanMurni = newDataMurni.filter(x =>
              x['KODE SUB UNIT'] === keyDinas &&
              x['KODE SUB KEGIATAN'] === keyListSubkegiatan &&
              isDAUPeruntukkan(x['NAMA SUMBER DANA'])
            );

            // console.log(listSubkegiatanMurni);
            let paguDAUMurni = total(listSubkegiatanMurni, 'PAGU')
            let paguDAUInput = total(newDAUPeruntukkan, 'PAGU')
            let selisihInput = paguDAUInput - paguDAUMurni
            // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], paguDAUMurni, paguDAUInput, selisihInput)
            rincianSubKegiatan[206] = { t: "n", v: paguDAUMurni, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[207] = { t: "n", v: paguDAUInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[208] = { t: "n", v: selisihInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
            let listBelanja = reducer(newDAUPeruntukkan, 'SUB RINCIAN OBJEK')
            for (const keyBelanja in listBelanja) {
              if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
                const belanja = listBelanja[keyBelanja];
                let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
                  x['SUB RINCIAN OBJEK'] === keyBelanja
                )
                let belanjaMurni = { t: "n", v: total(listBelanjaKegiatanMurni, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                let belanjaInput = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
                // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)
                let efisiensiBelanja = 0
                let deltaInput = 0
                let deltaEfisiensi = 0

                if (!rekeningEfisiensiDauPeruntukkan.includes(keyBelanja)) {
                  totalBelanjaRekeningLainnyaMurni += belanjaMurni.v
                  totalBelanjaRekeningLainnyaInput += belanjaInput.v
                } else {
                  if (keyBelanja === '5.1.02.04.01.0001') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[128] = belanjaMurni
                    rincianSubKegiatan[129] = belanjaInput
                    rincianSubKegiatan[130] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[131] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[132] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[133] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0002') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[134] = belanjaMurni
                    rincianSubKegiatan[135] = belanjaInput
                    rincianSubKegiatan[136] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[137] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[138] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[139] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0003') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[140] = belanjaMurni
                    rincianSubKegiatan[141] = belanjaInput
                    rincianSubKegiatan[142] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[143] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[144] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[145] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0004') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[146] = belanjaMurni
                    rincianSubKegiatan[147] = belanjaInput
                    rincianSubKegiatan[148] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[149] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[150] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[151] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.04.01.0005') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[152] = belanjaMurni
                    rincianSubKegiatan[153] = belanjaInput
                    rincianSubKegiatan[154] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[155] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[156] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[157] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0004') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[158] = belanjaMurni
                    rincianSubKegiatan[159] = belanjaInput
                    rincianSubKegiatan[160] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[161] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[162] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[163] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0024') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[164] = belanjaMurni
                    rincianSubKegiatan[165] = belanjaInput
                    rincianSubKegiatan[166] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[167] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[168] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[169] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0025') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[170] = belanjaMurni
                    rincianSubKegiatan[171] = belanjaInput
                    rincianSubKegiatan[172] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[173] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[174] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[175] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0043') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[176] = belanjaMurni
                    rincianSubKegiatan[177] = belanjaInput
                    rincianSubKegiatan[178] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[179] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[180] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[181] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0052') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[182] = belanjaMurni
                    rincianSubKegiatan[183] = belanjaInput
                    rincianSubKegiatan[184] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[185] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[186] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[187] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.02.01.01.0058') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[188] = belanjaMurni
                    rincianSubKegiatan[189] = belanjaInput
                    rincianSubKegiatan[190] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[191] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[192] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[193] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }

                  if (keyBelanja === '5.1.05.05.02.0001') {
                    totalBelanjaRekeningMurni += belanjaMurni.v
                    totalBelanjaRekeningInput += belanjaInput.v
                    efisiensiBelanja = belanjaMurni.v * 0.3 * -1
                    totalEfisiensi += efisiensiBelanja
                    deltaInput = belanjaInput.v - belanjaMurni.v
                    deltaEfisiensi = efisiensiBelanja - deltaInput
                    persentase = (deltaInput / efisiensiBelanja) * 100
                    rincianSubKegiatan[194] = belanjaMurni
                    rincianSubKegiatan[195] = belanjaInput
                    rincianSubKegiatan[196] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[197] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[198] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                    rincianSubKegiatan[199] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
                  }
                }
              }
            }
            rincianSubKegiatan[209] = { t: "n", v: totalEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[210] = { t: "n", v: totalEfisiensi - selisihInput, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[211] = { t: "n", v: (selisihInput / totalEfisiensi) * 100, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[200] = { t: "n", v: totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[201] = { t: "n", v: totalBelanjaRekeningLainnyaInput, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[202] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[203] = { t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[204] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
            rincianSubKegiatan[205] = { t: "n", v: (totalBelanjaRekeningLainnyaInput / totalBelanjaRekeningLainnyaMurni) * 100, s: { font: { name: "Calibri", sz: 9 } } }
            // console.log("Total Belanja Rekening Murni", totalBelanjaRekeningMurni, totalBelanjaRekeningInput, totalBelanjaRekeningMurni - totalBelanjaRekeningInput)
            // console.log("Total Belanja Rekening Lainnya Murni", totalBelanjaRekeningLainnyaMurni, totalBelanjaRekeningLainnyaInput, totalBelanjaRekeningLainnyaMurni - totalBelanjaRekeningLainnyaInput)
            // console.log("=============================================")
            // console.log("DAU Peruntukkan", newDAUPeruntukkan)
          }

          dataPerSubKegiatan.push(rincianSubKegiatan)
        }
      }

      let newDAU = dinas.filter((x) => {
        if (isDAUUmum(x['NAMA SUMBER DANA'])) {
          return x
        }
      })

      let newDAUPeruntukkan = dinas.filter((x) => {
        if (isDAUPeruntukkan(x['NAMA SUMBER DANA'])) {
          return x
        }
      })

      let grandTotalMurni = 0, grandTotalInput = 0, grandTotalEfisiensi = 0
      let grandTotalPerjalananDAUMurni = 0, grandTotalPerjalananDAUInput = 0, grandTotalPerjalananDAUEfisiensi = 0
      let grandTotalPerjalananDAUPeruntukkanMurni = 0, grandTotalPerjalananDAUPeruntukkanInput = 0, grandTotalPerjalananDAUPeruntukkanEfisiensi = 0

      if (newDAU.length) {
        // console.log("DAU UMUM")
        let totalEfisiensi = 0
        let totalBelanjaRekeningMurni = 0
        let totalBelanjaRekeningInput = 0
        let totalBelanjaRekeningLainnyaMurni = 0
        let totalBelanjaRekeningLainnyaInput = 0
        let listSubkegiatanMurni = newDataMurni.filter(x =>
          x['KODE SUB UNIT'] === keyDinas &&
          isDAUUmum(x['NAMA SUMBER DANA'])
        );

        // console.log(listSubkegiatanMurni);
        let paguDAUMurni = total(listSubkegiatanMurni, 'PAGU')
        let paguDAUInput = total(newDAU, 'PAGU')
        let selisihInput = paguDAUInput - paguDAUMurni
        // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], paguDAUMurni, paguDAUInput, selisihInput)
        rincianPerDinas[122] = { t: "n", v: paguDAUMurni, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        rincianPerDinas[123] = { t: "n", v: paguDAUInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        rincianPerDinas[124] = { t: "n", v: selisihInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        let listBelanja = reducer(newDAU, 'SUB RINCIAN OBJEK')
        for (const keyBelanja in listBelanja) {
          if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
            const belanja = listBelanja[keyBelanja];
            let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
              x['SUB RINCIAN OBJEK'] === keyBelanja
            )
            let belanjaMurni = { t: "n", v: total(listBelanjaKegiatanMurni, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
            let belanjaInput = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
            // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)
            let efisiensiBelanja = 0
            let deltaInput = 0
            let deltaEfisiensi = 0

            if (!rekeningEfisiensiDau.includes(keyBelanja)) {
              totalBelanjaRekeningLainnyaMurni += belanjaMurni.v
              totalBelanjaRekeningLainnyaInput += belanjaInput.v
            } else {
              if (keyBelanja === '5.1.02.04.01.0001') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUInput += belanjaInput.v
                grandTotalPerjalananDAUMurni += belanjaMurni.v
                grandTotalPerjalananDAUEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[2] = belanjaMurni
                rincianPerDinas[3] = belanjaInput
                rincianPerDinas[4] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[5] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[6] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[7] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0002') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUInput += belanjaInput.v
                grandTotalPerjalananDAUMurni += belanjaMurni.v
                grandTotalPerjalananDAUEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[8] = belanjaMurni
                rincianPerDinas[9] = belanjaInput
                rincianPerDinas[10] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[11] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[12] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[13] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0003') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUInput += belanjaInput.v
                grandTotalPerjalananDAUMurni += belanjaMurni.v
                grandTotalPerjalananDAUEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[14] = belanjaMurni
                rincianPerDinas[15] = belanjaInput
                rincianPerDinas[16] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[17] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[18] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[19] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0004') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUInput += belanjaInput.v
                grandTotalPerjalananDAUMurni += belanjaMurni.v
                grandTotalPerjalananDAUEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[20] = belanjaMurni
                rincianPerDinas[21] = belanjaInput
                rincianPerDinas[22] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[23] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[24] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[25] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0005') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUInput += belanjaInput.v
                grandTotalPerjalananDAUMurni += belanjaMurni.v
                grandTotalPerjalananDAUEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[26] = belanjaMurni
                rincianPerDinas[27] = belanjaInput
                rincianPerDinas[28] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[29] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[30] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[31] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0004') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[32] = belanjaMurni
                rincianPerDinas[33] = belanjaInput
                rincianPerDinas[34] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[35] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[36] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[37] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0024') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[38] = belanjaMurni
                rincianPerDinas[39] = belanjaInput
                rincianPerDinas[40] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[41] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[42] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[43] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0025') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[44] = belanjaMurni
                rincianPerDinas[45] = belanjaInput
                rincianPerDinas[46] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[47] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[48] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[49] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0026') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[50] = belanjaMurni
                rincianPerDinas[51] = belanjaInput
                rincianPerDinas[52] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[53] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[54] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[55] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0043') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[56] = belanjaMurni
                rincianPerDinas[57] = belanjaInput
                rincianPerDinas[58] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[59] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[60] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[61] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0052') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[62] = belanjaMurni
                rincianPerDinas[63] = belanjaInput
                rincianPerDinas[64] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[65] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[66] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[67] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0053') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[68] = belanjaMurni
                rincianPerDinas[69] = belanjaInput
                rincianPerDinas[70] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[71] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[72] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[73] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0058') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[74] = belanjaMurni
                rincianPerDinas[75] = belanjaInput
                rincianPerDinas[76] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[77] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[78] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[79] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.02.01.0052') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[80] = belanjaMurni
                rincianPerDinas[81] = belanjaInput
                rincianPerDinas[82] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[83] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[84] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[85] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.03.02.0035') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[86] = belanjaMurni
                rincianPerDinas[87] = belanjaInput
                rincianPerDinas[88] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[89] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[90] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[91] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.03.02.0036') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[92] = belanjaMurni
                rincianPerDinas[93] = belanjaInput
                rincianPerDinas[94] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[95] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[96] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[97] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.2.02.05.02.0001') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[98] = belanjaMurni
                rincianPerDinas[99] = belanjaInput
                rincianPerDinas[100] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[101] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[102] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[103] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.2.02.05.02.0006') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[104] = belanjaMurni
                rincianPerDinas[105] = belanjaInput
                rincianPerDinas[106] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[107] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[108] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[109] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.2.02.10.01.0002') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.7 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[110] = belanjaMurni
                rincianPerDinas[111] = belanjaInput
                rincianPerDinas[112] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[113] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[114] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[115] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }
            }
          }
        }

        rincianPerDinas[125] = { t: "n", v: totalEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[126] = { t: "n", v: totalEfisiensi - selisihInput, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[127] = { t: "n", v: (selisihInput / totalEfisiensi) * 100, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[116] = { t: "n", v: totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[117] = { t: "n", v: totalBelanjaRekeningLainnyaInput, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[118] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[119] = { t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[120] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[121] = { t: "n", v: (totalBelanjaRekeningLainnyaInput / totalBelanjaRekeningLainnyaMurni) * 100, s: { font: { name: "Calibri", sz: 9 } } }
        grandTotalMurni += paguDAUMurni
        grandTotalInput += paguDAUInput
        grandTotalEfisiensi += totalEfisiensi
        // console.log("Total Belanja Rekening Murni", totalBelanjaRekeningMurni, totalBelanjaRekeningInput, totalBelanjaRekeningMurni - totalBelanjaRekeningInput)
        // console.log("Total Belanja Rekening Lainnya Murni", totalBelanjaRekeningLainnyaMurni, totalBelanjaRekeningLainnyaInput, totalBelanjaRekeningLainnyaMurni - totalBelanjaRekeningLainnyaInput)
        // console.log("=============================================")
        // console.log("DAU", newDAU)
      }

      if (newDAUPeruntukkan.length) {
        // console.log("DAU PERUNTUKKAN")
        let totalEfisiensi = 0
        let totalBelanjaRekeningMurni = 0
        let totalBelanjaRekeningInput = 0
        let totalBelanjaRekeningLainnyaMurni = 0
        let totalBelanjaRekeningLainnyaInput = 0
        let listSubkegiatanMurni = newDataMurni.filter(x =>
          x['KODE SUB UNIT'] === keyDinas &&
          isDAUPeruntukkan(x['NAMA SUMBER DANA'])
        );

        // console.log(listSubkegiatanMurni);
        let paguDAUMurni = total(listSubkegiatanMurni, 'PAGU')
        let paguDAUInput = total(newDAUPeruntukkan, 'PAGU')
        let selisihInput = paguDAUInput - paguDAUMurni
        // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], paguDAUMurni, paguDAUInput, selisihInput)
        rincianPerDinas[206] = { t: "n", v: paguDAUMurni, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        rincianPerDinas[207] = { t: "n", v: paguDAUInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        rincianPerDinas[208] = { t: "n", v: selisihInput, s: { font: { bold: true, name: "Calibri", sz: 9 } } }
        let listBelanja = reducer(newDAUPeruntukkan, 'SUB RINCIAN OBJEK')
        for (const keyBelanja in listBelanja) {
          if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
            const belanja = listBelanja[keyBelanja];
            let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
              x['SUB RINCIAN OBJEK'] === keyBelanja
            )
            let belanjaMurni = { t: "n", v: total(listBelanjaKegiatanMurni, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
            let belanjaInput = { t: "n", v: total(belanja, 'PAGU'), s: { font: { name: "Calibri", sz: 9 } } }
            // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)
            let efisiensiBelanja = 0
            let deltaInput = 0
            let deltaEfisiensi = 0

            if (!rekeningEfisiensiDauPeruntukkan.includes(keyBelanja)) {
              totalBelanjaRekeningLainnyaMurni += belanjaMurni.v
              totalBelanjaRekeningLainnyaInput += belanjaInput.v
            } else {
              if (keyBelanja === '5.1.02.04.01.0001') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUPeruntukkanInput += belanjaInput.v
                grandTotalPerjalananDAUPeruntukkanMurni += belanjaMurni.v
                grandTotalPerjalananDAUPeruntukkanEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[128] = belanjaMurni
                rincianPerDinas[129] = belanjaInput
                rincianPerDinas[130] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[131] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[132] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[133] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0002') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUPeruntukkanInput += belanjaInput.v
                grandTotalPerjalananDAUPeruntukkanMurni += belanjaMurni.v
                grandTotalPerjalananDAUPeruntukkanEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[134] = belanjaMurni
                rincianPerDinas[135] = belanjaInput
                rincianPerDinas[136] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[137] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[138] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[139] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0003') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUPeruntukkanInput += belanjaInput.v
                grandTotalPerjalananDAUPeruntukkanMurni += belanjaMurni.v
                grandTotalPerjalananDAUPeruntukkanEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[140] = belanjaMurni
                rincianPerDinas[141] = belanjaInput
                rincianPerDinas[142] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[143] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[144] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[145] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0004') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUPeruntukkanInput += belanjaInput.v
                grandTotalPerjalananDAUPeruntukkanMurni += belanjaMurni.v
                grandTotalPerjalananDAUPeruntukkanEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[146] = belanjaMurni
                rincianPerDinas[147] = belanjaInput
                rincianPerDinas[148] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[149] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[150] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[151] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.04.01.0005') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.5 * -1
                grandTotalPerjalananDAUPeruntukkanInput += belanjaInput.v
                grandTotalPerjalananDAUPeruntukkanMurni += belanjaMurni.v
                grandTotalPerjalananDAUPeruntukkanEfisiensi += efisiensiBelanja
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[152] = belanjaMurni
                rincianPerDinas[153] = belanjaInput
                rincianPerDinas[154] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[155] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[156] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[157] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0004') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[158] = belanjaMurni
                rincianPerDinas[159] = belanjaInput
                rincianPerDinas[160] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[161] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[162] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[163] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0024') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[164] = belanjaMurni
                rincianPerDinas[165] = belanjaInput
                rincianPerDinas[166] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[167] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[168] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[169] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0025') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[170] = belanjaMurni
                rincianPerDinas[171] = belanjaInput
                rincianPerDinas[172] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[173] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[174] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[175] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0043') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[176] = belanjaMurni
                rincianPerDinas[177] = belanjaInput
                rincianPerDinas[178] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[179] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[180] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[181] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0052') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[182] = belanjaMurni
                rincianPerDinas[183] = belanjaInput
                rincianPerDinas[184] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[185] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[186] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[187] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.02.01.01.0058') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.35 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[188] = belanjaMurni
                rincianPerDinas[189] = belanjaInput
                rincianPerDinas[190] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[191] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[192] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[193] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }

              if (keyBelanja === '5.1.05.05.02.0001') {
                totalBelanjaRekeningMurni += belanjaMurni.v
                totalBelanjaRekeningInput += belanjaInput.v
                efisiensiBelanja = belanjaMurni.v * 0.3 * -1
                totalEfisiensi += efisiensiBelanja
                deltaInput = belanjaInput.v - belanjaMurni.v
                deltaEfisiensi = efisiensiBelanja - deltaInput
                persentase = (deltaInput / efisiensiBelanja) * 100
                rincianPerDinas[194] = belanjaMurni
                rincianPerDinas[195] = belanjaInput
                rincianPerDinas[196] = { t: "n", v: deltaInput, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[197] = { t: "n", v: efisiensiBelanja, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[198] = { t: "n", v: deltaEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
                rincianPerDinas[199] = { t: "n", v: persentase, s: { font: { name: "Calibri", sz: 9 } } }
              }
            }
          }
        }
        rincianPerDinas[209] = { t: "n", v: totalEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[210] = { t: "n", v: totalEfisiensi - selisihInput, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[211] = { t: "n", v: (selisihInput / totalEfisiensi) * 100, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[200] = { t: "n", v: totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[201] = { t: "n", v: totalBelanjaRekeningLainnyaInput, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[202] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[203] = { t: "n", v: 0, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[204] = { t: "n", v: totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni, s: { font: { name: "Calibri", sz: 9 } } }
        rincianPerDinas[205] = { t: "n", v: (totalBelanjaRekeningLainnyaInput / totalBelanjaRekeningLainnyaMurni) * 100, s: { font: { name: "Calibri", sz: 9 } } }
        grandTotalMurni += paguDAUMurni
        grandTotalInput += paguDAUInput
        grandTotalEfisiensi += totalEfisiensi
        // console.log("Total Belanja Rekening Murni", totalBelanjaRekeningMurni, totalBelanjaRekeningInput, totalBelanjaRekeningMurni - totalBelanjaRekeningInput)
        // console.log("Total Belanja Rekening Lainnya Murni", totalBelanjaRekeningLainnyaMurni, totalBelanjaRekeningLainnyaInput, totalBelanjaRekeningLainnyaMurni - totalBelanjaRekeningLainnyaInput)
        // console.log("=============================================")
        // console.log("DAU Peruntukkan", newDAUPeruntukkan)
      }

      rincianPerDinas[212] = { t: "n", v: grandTotalMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[213] = { t: "n", v: grandTotalInput, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[214] = { t: "n", v: grandTotalInput - grandTotalMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[215] = { t: "n", v: grandTotalEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[216] = { t: "n", v: grandTotalEfisiensi - (grandTotalInput - grandTotalMurni), s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[217] = { t: "n", v: (grandTotalInput - grandTotalMurni) / grandTotalEfisiensi * 100, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[218] = { t: "n", v: grandTotalPerjalananDAUMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[219] = { t: "n", v: grandTotalPerjalananDAUInput, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[220] = { t: "n", v: grandTotalPerjalananDAUInput - grandTotalPerjalananDAUMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[221] = { t: "n", v: grandTotalPerjalananDAUEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[222] = { t: "n", v: grandTotalPerjalananDAUEfisiensi - (grandTotalPerjalananDAUInput - grandTotalPerjalananDAUMurni), s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[223] = { t: "n", v: (grandTotalPerjalananDAUInput - grandTotalPerjalananDAUMurni) / grandTotalPerjalananDAUEfisiensi * 100, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[224] = { t: "n", v: grandTotalPerjalananDAUPeruntukkanMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[225] = { t: "n", v: grandTotalPerjalananDAUPeruntukkanInput, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[226] = { t: "n", v: grandTotalPerjalananDAUPeruntukkanInput - grandTotalPerjalananDAUPeruntukkanMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[227] = { t: "n", v: grandTotalPerjalananDAUPeruntukkanEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[228] = { t: "n", v: grandTotalPerjalananDAUPeruntukkanEfisiensi - (grandTotalPerjalananDAUPeruntukkanInput - grandTotalPerjalananDAUPeruntukkanMurni), s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[229] = { t: "n", v: (grandTotalPerjalananDAUPeruntukkanInput - grandTotalPerjalananDAUPeruntukkanMurni) / grandTotalPerjalananDAUPeruntukkanEfisiensi * 100, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[230] = { t: "n", v: grandTotalPerjalananDAUMurni + grandTotalPerjalananDAUPeruntukkanMurni, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[231] = { t: "n", v: grandTotalPerjalananDAUMurni + grandTotalPerjalananDAUPeruntukkanInput, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[232] = { t: "n", v: (grandTotalPerjalananDAUInput + grandTotalPerjalananDAUPeruntukkanInput) - (grandTotalPerjalananDAUMurni + grandTotalPerjalananDAUPeruntukkanMurni), s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[233] = { t: "n", v: grandTotalPerjalananDAUEfisiensi + grandTotalPerjalananDAUPeruntukkanEfisiensi, s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[234] = { t: "n", v: (grandTotalPerjalananDAUEfisiensi + grandTotalPerjalananDAUPeruntukkanEfisiensi) - ((grandTotalPerjalananDAUInput + grandTotalPerjalananDAUPeruntukkanInput) - (grandTotalPerjalananDAUMurni + grandTotalPerjalananDAUPeruntukkanMurni)), s: { font: { name: "Calibri", sz: 9 } } }
      rincianPerDinas[235] = { t: "n", v: ((grandTotalPerjalananDAUInput + grandTotalPerjalananDAUPeruntukkanInput) - (grandTotalPerjalananDAUMurni + grandTotalPerjalananDAUPeruntukkanMurni)) / (grandTotalPerjalananDAUEfisiensi + grandTotalPerjalananDAUPeruntukkanEfisiensi) * 100, s: { font: { name: "Calibri", sz: 9 } } }

      // per sumber dana

      dataPerDinas.push(rincianPerDinas)
      const worksheet = XLSX.utils.aoa_to_sheet(dataPerSubKegiatan);
      XLSX.utils.book_append_sheet(workbookSubkegiatan, worksheet, dinas[0]['NAMA SUB UNIT'].substring(0, 30));
    }
  }

  const worksheetDinas = XLSX.utils.aoa_to_sheet(dataPerDinas)
  XLSX.utils.book_append_sheet(workbookDinas, worksheetDinas, "EFISIENSI");
  XLSX.writeFile(workbookDinas, "EFISIENSI PER DINAS.xlsx", { compression: true });
  XLSX.writeFile(workbookSubkegiatan, "EFISIENSI PER SUBKEGIATAN.xlsx", { compression: true });
}

pemotongan()

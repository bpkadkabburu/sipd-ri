const XLSX = require('xlsx-js-style')
const fs = require('fs')
const listRealisasi = require('./JSON/2025/realisasi_complete.json')

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

const efisiensiGrandTotal = [
  { "rekening": "5.1.02.04.01.0001", "nama": "Belanja Perjalanan Dinas Biasa", "persentase": 0.5, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.04.01.0002", "nama": "Belanja Perjalanan Dinas Tetap", "persentase": 0.5, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.04.01.0003", "nama": "Belanja Perjalanan Dinas Dalam Kota", "persentase": 0.5, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.04.01.0004", "nama": "Belanja Perjalanan Dinas Paket Meeting Dalam Kota", "persentase": 0.5, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.04.01.0005", "nama": "Belanja Perjalanan Dinas Paket Meeting Luar Kota", "persentase": 0.5, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0004", "nama": "Belanja Bahan-Bahan Bakar dan Pelumas", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0024", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0025", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor- Kertas dan Cover", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0026", "nama": "Belanja Alat/Bahan untuk Kegiatan Kantor- Bahan Cetak", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.1.02.01.01.0043", "nama": "Belanja Natura dan Pakan-Natura", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0052", "nama": "Belanja Makanan dan Minuman Rapat", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.01.01.0053", "nama": "Belanja Makanan dan Minuman Jamuan Tamu", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.1.02.01.01.0058", "nama": "Belanja Makanan dan Minuman Aktivitas Lapangan", "persentase": 0.35, "owner": ["umum", "peruntukkan"] },
  { "rekening": "5.1.02.02.01.0052", "nama": "Belanja Jasa Pembersihan, Pengendalian Hama, dan Fumigasi", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.1.02.03.02.0035", "nama": "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Dinas Bermotor Perorangan", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.1.02.03.02.0036", "nama": "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Bermotor Penumpang", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.2.02.05.02.0001", "nama": "Belanja Modal Mebel", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.2.02.05.02.0006", "nama": "Belanja Modal Alat Rumah Tangga Lainnya (Home Use)", "persentase": 0.35, "owner": ["umum"] },
  { "rekening": "5.2.02.10.01.0002", "nama": "Belanja Modal Personal Computer", "persentase": 0.7, "owner": ["umum"] },
  { "rekening": "5.1.05.05.02.0001", "nama": "Belanja Hibah Uang kepada Badan dan Lembaga Nirlaba, Sukarela dan Sosial yang Telah Memiliki Surat Keterangan Terdaftar", "persentase": 0.3, "owner": ["peruntukkan"] },
]


const rekeningEfisiensiDau = efisiensiDau.map(x => x.rekening)
const rekeningEfisiensiDauPeruntukkan = efisiensiDauPeruntukkan.map(x => x.rekening)
const rekeningEfisiensiGrandTotal = efisiensiGrandTotal.map(x => x.rekening)

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

function pushItemPlusNull(arr, value, count) {
  arr.push(value);
  for (let i = 0; i < (count * 8) - 1; i++) {
    arr.push(null);
  }
}

function pushFiveTemplate(arr) {
  arr.push(
    "Murni",
    "Trgt Ef",
    "Trgt Inp",
    "Input",
    "L/K Inp",
    "% Ef",
    "Realisasi",
    "Δ I",
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
            header[i].push(createCell('s', vv, true))
          } else {
            header[i].push(createCell('s', namaRekening.nama, true))
          }
        } else {
          header[i].push(createCell('s', vv, true))
        }
      }
    }
  }

  return header
}

const findIndex = (arr, target) => arr
  .map((val, idx) => val === target ? idx : -1)
  .filter(idx => idx !== -1);

const getRekening = (rekening, list) => list.find(x => x.rekening === rekening);

function createCell(type, value, isBold = false) {
  return {
    t: type,
    v: value,
    s: {
      font: {
        bold: isBold,
        name: "Calibri",
        sz: 9
      }
    }
  };
}

function filterSubkegiatanMurni(data, keyDinas, options = {}) {
  const {
    keyListSubkegiatan = null,
    sumberDanaFilter = 'umum', // 'umum', 'peruntukkan', atau 'semua'
  } = options;

  return data.filter(x => {
    const matchDinas = x['KODE SUB UNIT'] === keyDinas;
    const matchSubkegiatan = keyListSubkegiatan
      ? x['KODE SUB KEGIATAN'] === keyListSubkegiatan
      : true;

    const sumberDana = x['NAMA SUMBER DANA'];

    const matchSumberDana =
      sumberDanaFilter === 'umum' ? isDAUUmum(sumberDana) :
        sumberDanaFilter === 'peruntukkan' ? isDAUPeruntukkan(sumberDana) :
          sumberDanaFilter === 'semua' ? (isDAUUmum(sumberDana) || isDAUPeruntukkan(sumberDana)) :
            false;

    return matchDinas && matchSubkegiatan && matchSumberDana;
  });
}

function filterRealisasi(listRealisasi, keyDinas, options) {
  const {
    keyListSubkegiatan = null
  } = options;
  return listRealisasi.filter(x => {
    const matchDinas = x['KODE SUB UNIT'] === keyDinas;
    const matchSubKegiatan = keyListSubkegiatan
      ? x['KODE SUB KEGIATAN'] === keyListSubkegiatan
      : true;
    return matchDinas && matchSubKegiatan;
  });
}

const buildPemotongan = (
  result,
  dataMurni,
  dataPergeseran,
  dataRealisasi,
  dinas,
  listHeader,
  rekeningEfisiensi,
  listEfisiensi,
  options = {}
) => {
  let totalEfisiensiMurni = 0
  let totalBelanjaRekeningLainnyaMurni = 0
  let totalBelanjaRekeningLainnyaInput = 0
  let totalRealisasi = 0
  let totalRealisasiBelanjaRekeningLainnya = 0
  let listSubkegiatanMurni = filterSubkegiatanMurni(dataMurni, dinas, options)
  let realisasi = filterRealisasi(dataRealisasi, dinas, options)
  // console.log(listSubkegiatanMurni);
  let paguDAUMurni = total(listSubkegiatanMurni, 'PAGU')
  let paguDAUInput = total(dataPergeseran, 'PAGU')
  let selisihInput = paguDAUMurni - paguDAUInput
  // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], paguDAUMurni, paguDAUInput, selisihInput)
  let listBelanja = reducer(dataPergeseran, 'SUB RINCIAN OBJEK')
  if (!options.keyListSubkegiatan) {
    console.log("====== TEF" + options.sumberDanaFilter + "======")
  } else {
    console.log(options.keyListSubkegiatan)
    console.log("======" + options.sumberDanaFilter + "======")
  }
  for (const keyBelanja in listBelanja) {
    if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
      // console.log(keyBelanja)
      const belanja = listBelanja[keyBelanja];
      let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
        x['SUB RINCIAN OBJEK'] === keyBelanja
      )

      let realisasiBelanja = realisasi.filter(x =>
        x['SUB RINCIAN OBJEK'] === keyBelanja
      )

      let belanjaMurni = total(listBelanjaKegiatanMurni, 'PAGU')
      let belanjaInput = total(belanja, 'PAGU')
      let realisasiReal = total(realisasiBelanja, 'REALISASI')
      // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)

      if (!rekeningEfisiensi.includes(keyBelanja)) {
        // console.log("Lainnya")
        totalBelanjaRekeningLainnyaMurni += belanjaMurni
        totalBelanjaRekeningLainnyaInput += belanjaInput
        totalRealisasiBelanjaRekeningLainnya += realisasiReal
        console.log(keyBelanja, format(belanjaMurni), format(0))
      } else {
        let startIndex = findIndex(listHeader[1], keyBelanja)
        let excelIndex = startIndex[options.index]
        let rekening = getRekening(keyBelanja, listEfisiensi)
        let efisiensiBelanjaMurni = belanjaMurni * rekening.persentase * -1
        console.log(keyBelanja, format(belanjaMurni), rekening.persentase, format(efisiensiBelanjaMurni))
        totalEfisiensiMurni += efisiensiBelanjaMurni
        let targetInput = belanjaMurni + efisiensiBelanjaMurni
        let lkPotongan = belanjaInput - targetInput
        let persentaseEfisiensi = (belanjaMurni - belanjaInput) / efisiensiBelanjaMurni * 100 * -1
        totalRealisasi += realisasiReal
        let selisihBelanja = belanjaMurni - belanjaInput

        result[excelIndex++] = createCell('n', belanjaMurni)
        result[excelIndex++] = createCell('n', efisiensiBelanjaMurni)
        result[excelIndex++] = createCell('n', targetInput)
        result[excelIndex++] = createCell('n', belanjaInput)
        result[excelIndex++] = createCell('n', lkPotongan)
        result[excelIndex++] = createCell('n', persentaseEfisiensi)
        result[excelIndex++] = createCell('n', realisasiReal)
        result[excelIndex++] = createCell('n', selisihBelanja)
      }
    }
  }

  let lainnyaIndex = findIndex(listHeader[1], 'Rekening Lainnya')[options.index]
  result[lainnyaIndex++] = createCell('n', totalBelanjaRekeningLainnyaMurni)
  result[lainnyaIndex++] = createCell('n', 0)
  result[lainnyaIndex++] = createCell('n', totalBelanjaRekeningLainnyaMurni)
  result[lainnyaIndex++] = createCell('n', totalBelanjaRekeningLainnyaInput)
  result[lainnyaIndex++] = createCell('n', totalBelanjaRekeningLainnyaInput - totalBelanjaRekeningLainnyaMurni)
  result[lainnyaIndex++] = createCell('n', 0)
  result[lainnyaIndex++] = createCell('n', totalRealisasiBelanjaRekeningLainnya)
  result[lainnyaIndex++] = createCell('n', totalBelanjaRekeningLainnyaMurni - totalBelanjaRekeningLainnyaInput)
  // TOTAL
  result[lainnyaIndex++] = createCell('n', paguDAUMurni)
  result[lainnyaIndex++] = createCell('n', totalEfisiensiMurni)
  result[lainnyaIndex++] = createCell('n', paguDAUMurni + totalEfisiensiMurni)
  result[lainnyaIndex++] = createCell('n', paguDAUInput)
  result[lainnyaIndex++] = createCell('n', paguDAUInput - (paguDAUMurni + totalEfisiensiMurni))
  result[lainnyaIndex++] = createCell('n', (paguDAUMurni - paguDAUInput) / totalEfisiensiMurni * 100 * -1)
  result[lainnyaIndex++] = createCell('n', totalRealisasi)
  result[lainnyaIndex++] = createCell('n', selisihInput)
  if (!options.keyListSubkegiatan) {
    console.log("TEF: " + format(totalEfisiensiMurni))
  }
  // console.log("\n")
}

function pemotongan() {
  const xlfPergeseran = './EXCEL/2025/rekap5_pergeseran_2.xlsx'
  const xlfMurni = './EXCEL/2025/rekap5_pergeseran_1.xlsx'
  const xlbPergeseran = fs.readFileSync(xlfPergeseran)
  const xlbMurni = fs.readFileSync(xlfMurni)
  const wbPergeseran = XLSX.read(xlbPergeseran)
  const wbMurni = XLSX.read(xlbMurni)
  let listDataPergeseran = XLSX.utils.sheet_to_json(wbPergeseran.Sheets[wbPergeseran.SheetNames[0]])
  let listDataMurni = XLSX.utils.sheet_to_json(wbMurni.Sheets[wbMurni.SheetNames[0]])

  const workbookSubkegiatan = XLSX.utils.book_new();
  const workbookDinas = XLSX.utils.book_new();

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
  pushItemPlusNull(listEfisiensiDinas[0], "GRAND TOTAL", efisiensiGrandTotal.length + 2);
  pushNamaPerItem(listEfisiensiDinas[1], listEfisiensiDinas[2], efisiensiDau);
  pushNamaPerItem(listEfisiensiDinas[1], listEfisiensiDinas[2], efisiensiDauPeruntukkan);
  pushNamaPerItem(listEfisiensiDinas[1], listEfisiensiDinas[2], efisiensiGrandTotal);
  pushItemPlusNull(listEfisiensiDinas[0], "Belanja Perjalanan Dinas", 3);
  pushItemPlusNull(listEfisiensiDinas[1], "DAU UMUM", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);
  pushItemPlusNull(listEfisiensiDinas[1], "DAU PERUNTUKKAN", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);
  pushItemPlusNull(listEfisiensiDinas[1], "GRAND TOTAL", 1);
  pushFiveTemplate(listEfisiensiDinas[2]);

  // console.log(listEfisiensiDinas)

  let dataPerDinas = buildHeader(listEfisiensiDinas, efisiensiDau, efisiensiDauPeruntukkan)

  let newDataPergeseran = listDataPergeseran.filter((x) => {
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

  let listDinas = reducer(newDataPergeseran, 'KODE SUB UNIT')
  for (const keyDinas in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, keyDinas)) {
      const dinas = listDinas[keyDinas]
      // if (dinas[0]['NAMA SUB UNIT'] !== 'Dinas Pemberdayaan Perempuan dan Perlindungan Anak') continue;
      // console.log(dinas)


      console.log("=============================================")
      console.log("DINAS ", dinas[0]['NAMA SUB UNIT'])

      if (/Puskesmas/.test(dinas[0]['NAMA SUB UNIT'])) {
        continue;
      }

      let rincianPerDinas = []

      rincianPerDinas.push(
        createCell('s', dinas[0]['KODE SUB UNIT'], true),
        createCell('s', dinas[0]['NAMA SUB UNIT'], true),
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

      // console.log(listSubkegiatanDinas)

      let dataPerSubKegiatan = buildHeader(listSubkegiatanDinas, efisiensiDau, efisiensiDauPeruntukkan)
      // console.log(listSubkegiatanDinas)

      for (const keyListSubkegiatan in listSubkegiatan) {
        if (Object.hasOwnProperty.call(listSubkegiatan, keyListSubkegiatan)) {
          // console.log(keyListSubkegiatan)
          const subkegiatan = listSubkegiatan[keyListSubkegiatan]
          let rincianSubKegiatan = []
          rincianSubKegiatan.push(
            createCell('s', keyListSubkegiatan, true),
            createCell('s', subkegiatan[0]['NAMA SUB KEGIATAN'], true),
          )

          for (let index = 2; index < listSubkegiatanDinas[2].length - 1; index++) {
            rincianSubKegiatan[index] = null;
          }

          let pergeseranDAU = subkegiatan.filter((x) => {
            if (isDAUUmum(x['NAMA SUMBER DANA'])) {
              return x
            }
          })

          let pergeseranDAUPeruntukkan = subkegiatan.filter((x) => {
            if (isDAUPeruntukkan(x['NAMA SUMBER DANA'])) {
              return x
            }
          })

          if (pergeseranDAU.length) {
            // console.log("DAU UMUM")
            buildPemotongan(
              rincianSubKegiatan,
              newDataMurni,
              pergeseranDAU,
              listRealisasi,
              keyDinas,
              listSubkegiatanDinas,
              rekeningEfisiensiDau,
              efisiensiDau,
              options = { keyListSubkegiatan, index: 0, sumberDanaFilter: 'umum' }
            )
          }

          if (pergeseranDAUPeruntukkan.length) {
            // console.log("DAU PERUNTUKKAN")
            buildPemotongan(
              rincianSubKegiatan,
              newDataMurni,
              pergeseranDAUPeruntukkan,
              listRealisasi,
              keyDinas,
              listSubkegiatanDinas,
              rekeningEfisiensiDauPeruntukkan,
              efisiensiDauPeruntukkan,
              options = { keyListSubkegiatan, index: 1, sumberDanaFilter: 'peruntukkan' }
            )
          }

          dataPerSubKegiatan.push(rincianSubKegiatan)
        }
      }

      let pergeseranDAU = dinas.filter((x) => {
        if (isDAUUmum(x['NAMA SUMBER DANA'])) {
          return x
        }
      })

      let pergeseranDAUPeruntukkan = dinas.filter((x) => {
        if (isDAUPeruntukkan(x['NAMA SUMBER DANA'])) {
          return x
        }
      })

      if (pergeseranDAU.length) {
        // console.log("DAU UMUM")
        buildPemotongan(
          rincianPerDinas,
          newDataMurni,
          pergeseranDAU,
          listRealisasi,
          keyDinas,
          listEfisiensiDinas,
          rekeningEfisiensiDau,
          efisiensiDau,
          options = { index: 0, sumberDanaFilter: 'umum' }
        )
      }

      if (pergeseranDAUPeruntukkan.length) {
        // console.log("DAU PERUNTUKKAN")
        buildPemotongan(
          rincianPerDinas,
          newDataMurni,
          pergeseranDAUPeruntukkan,
          listRealisasi,
          keyDinas,
          listEfisiensiDinas,
          rekeningEfisiensiDauPeruntukkan,
          efisiensiDauPeruntukkan,
          options = { index: 1, sumberDanaFilter: 'peruntukkan' }
        )
      }

      let pergeseranTotal = dinas.filter((x) => {
        if (isDAUUmum(x['NAMA SUMBER DANA']) || isDAUPeruntukkan(x['NAMA SUMBER DANA'])) {
          return x
        }
      })
      console.log("++++++++++++++++++++++++++++++++++")
      console.log("GRAND TOTAL")

      let grandTotalEfisiensiMurni = 0
      let grandTotalBelanjaRekeningLainnyaMurni = 0
      let grandTotalBelanjaRekeningLainnyaInput = 0
      let grandTotalRealisasi = 0
      let grandTotalRealisasiBelanjaRekeningLainnya = 0

      let listSubkegiatanMurni = newDataMurni.filter(x =>
        x['KODE SUB UNIT'] === keyDinas &&
        (isDAUUmum(x['NAMA SUMBER DANA']) || isDAUPeruntukkan(x['NAMA SUMBER DANA']))
      );

      let realisasi = listRealisasi.filter(x =>
        x['KODE SUB UNIT'] === keyDinas
      )

      // console.log(dinas)

      // console.log(listSubkegiatanMurni);
      let grandTotalMurni = total(listSubkegiatanMurni, 'PAGU')
      let grandTotalInput = total(pergeseranTotal, 'PAGU')
      let selisihInput = grandTotalInput - grandTotalMurni
      // console.log(subkegiatan[0]['NAMA SUB KEGIATAN'], grandTotalMurni, grandTotalInput, selisihInput)
      let listBelanja = reducer(pergeseranTotal, 'SUB RINCIAN OBJEK')
      for (const keyBelanja in listBelanja) {
        if (Object.hasOwnProperty.call(listBelanja, keyBelanja)) {
          // console.log(keyBelanja)
          const belanja = listBelanja[keyBelanja];
          let listBelanjaKegiatanMurni = listSubkegiatanMurni.filter(x =>
            x['SUB RINCIAN OBJEK'] === keyBelanja
          )

          let realisasiBelanja = realisasi.filter(x =>
            x['SUB RINCIAN OBJEK'] === keyBelanja
          )

          // console.log(listBelanjaKegiatanMurni)

          let belanjaMurni = total(listBelanjaKegiatanMurni, 'PAGU')
          let belanjaInput = total(belanja, 'PAGU')
          let realisasiReal = total(realisasiBelanja, 'REALISASI')

          // console.log(belanja[0]['NAMA REKENING'], belanjaMurni.v, belanjaInput.v)

          if (!rekeningEfisiensiGrandTotal.includes(keyBelanja)) {
            grandTotalBelanjaRekeningLainnyaMurni += belanjaMurni
            grandTotalBelanjaRekeningLainnyaInput += belanjaInput
            grandTotalRealisasiBelanjaRekeningLainnya += realisasiReal
          } else {
            let startIndex = findIndex(listEfisiensiDinas[1], keyBelanja)
            let excelIndex = startIndex[2]
            let rekening = getRekening(keyBelanja, efisiensiGrandTotal)
            let efisiensiBelanjaMurni = 0
            if (rekening.owner.length === 2) {
              console.log("UMUM + PERUNTUKKAN")
              efisiensiBelanjaMurni = belanjaMurni * rekening.persentase * -1
              console.log(keyBelanja, format(belanjaMurni), rekening.persentase, format(efisiensiBelanjaMurni))
              grandTotalEfisiensiMurni += efisiensiBelanjaMurni
            } else {
              console.log(rekening.owner)
              if (rekening.owner.includes('umum')) {
                console.log("UMUM")
                let listBelanjaKegiatanMurniOwner = listBelanjaKegiatanMurni.filter(x =>
                  isDAUUmum(x['NAMA SUMBER DANA'])
                )

                let totalBelanja = total(listBelanjaKegiatanMurniOwner, 'PAGU')
                efisiensiBelanjaMurni = totalBelanja * rekening.persentase * -1
                console.log(keyBelanja, format(belanjaMurni), rekening.persentase, format(efisiensiBelanjaMurni))
                grandTotalEfisiensiMurni += efisiensiBelanjaMurni
              }

              if (rekening.owner.includes('peruntukkan')) {
                console.log("PERUNTUKKAN")
                let listBelanjaKegiatanMurniOwner = listBelanjaKegiatanMurni.filter(x =>
                  isDAUPeruntukkan(x['NAMA SUMBER DANA'])
                )

                totalBelanja = total(listBelanjaKegiatanMurniOwner, 'PAGU')
                let efisiensiBelanjaMurni = totalBelanja * rekening.persentase * -1
                console.log(keyBelanja, format(belanjaMurni), rekening.persentase, format(efisiensiBelanjaMurni))
                grandTotalEfisiensiMurni += efisiensiBelanjaMurni
              }
            }
            let targetInput = belanjaMurni + efisiensiBelanjaMurni
            let lkPotongan = belanjaInput - targetInput
            let persentaseEfisiensi = (belanjaMurni - belanjaInput) / efisiensiBelanjaMurni * 100 * -1
            grandTotalRealisasi += realisasiReal
            let selisihBelanja = belanjaMurni - belanjaInput

            rincianPerDinas[excelIndex++] = createCell('n', belanjaMurni)
            rincianPerDinas[excelIndex++] = createCell('n', efisiensiBelanjaMurni)
            rincianPerDinas[excelIndex++] = createCell('n', targetInput)
            rincianPerDinas[excelIndex++] = createCell('n', belanjaInput)
            rincianPerDinas[excelIndex++] = createCell('n', lkPotongan)
            rincianPerDinas[excelIndex++] = createCell('n', persentaseEfisiensi)
            rincianPerDinas[excelIndex++] = createCell('n', realisasiReal)
            rincianPerDinas[excelIndex++] = createCell('n', selisihBelanja)
          }
        }
      }

      let lainnyaIndex = findIndex(listEfisiensiDinas[1], 'Rekening Lainnya')[2]
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalBelanjaRekeningLainnyaMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', 0)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalBelanjaRekeningLainnyaMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalBelanjaRekeningLainnyaInput)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalBelanjaRekeningLainnyaInput - grandTotalBelanjaRekeningLainnyaMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', 0)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalRealisasiBelanjaRekeningLainnya)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalBelanjaRekeningLainnyaMurni - grandTotalBelanjaRekeningLainnyaInput)
      // TOTAL
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalEfisiensiMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalMurni + grandTotalEfisiensiMurni)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalInput)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalInput - (grandTotalMurni + grandTotalEfisiensiMurni))
      rincianPerDinas[lainnyaIndex++] = createCell('n', (grandTotalMurni - grandTotalInput) / grandTotalEfisiensiMurni * 100)
      rincianPerDinas[lainnyaIndex++] = createCell('n', grandTotalRealisasi)
      rincianPerDinas[lainnyaIndex++] = createCell('n', selisihInput)


      console.log("Total Belanja Rekening Murni", grandTotalMurni, grandTotalInput, selisihInput)


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

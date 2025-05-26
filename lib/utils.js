/**
 * Menghitung total nilai dari properti tertentu dalam array objek
 * @param {Array} data - Array objek yang akan dijumlahkan
 * @param {string} property - Nama properti yang akan dijumlahkan
 * @returns {number} Total nilai
 */
function calculateSum(data, property) {
  return data.reduce((acc, item) => {
    let value = item[property];
    if (typeof value === 'undefined') {
      value = 0;
    }
    return acc + parseFloat(value);
  }, 0);
}

/**
 * Mengelompokkan array objek berdasarkan nilai properti tertentu
 * @param {Array} data - Array objek yang akan dikelompokkan
 * @param {string} groupBy - Nama properti untuk pengelompokan
 * @returns {Object} Objek dengan key adalah nilai properti dan value adalah array
 */
function groupByProperty(data, groupBy) {
  return data.reduce((accumulator, currentValue) => {
    (accumulator[currentValue[groupBy]] = accumulator[currentValue[groupBy]] || []).push(currentValue);
    return accumulator;
  }, {});
}

/**
 * Mengekstrak nilai dari properti tertentu dalam array objek
 * @param {Array} data - Array objek
 * @param {string} property - Nama properti yang akan diekstrak
 * @returns {Array} Array nilai dari properti tersebut
 */
function extractProperty(data, property) {
  return data.map(item => item[property]);
}

/**
 * Menghitung jumlah kemunculan setiap nilai dalam properti tertentu
 * @param {Array} data - Array objek
 * @param {string} property - Nama properti yang akan dihitung
 * @returns {Object} Objek dengan key adalah nilai properti dan value adalah jumlah kemunculan
 */
function countByProperty(data, property) {
  return data.reduce((acc, obj) => {
    const keyValue = obj[property];
    acc[keyValue] = (acc[keyValue] || 0) + 1;
    return acc;
  }, {});
}


/**
 * Format angka menjadi format mata uang Rupiah Indonesia
 * @param {number} amount - Jumlah yang akan diformat
 * @returns {string} String format mata uang (Rp. 1.000.000,00)
 */
function formatToRupiah(amount) {
  let formatted = Intl.NumberFormat('id-ID', { 
    style: "currency", 
    currency: "IDR" 
  }).format(amount);
  
  return formatted.replace("Rp", "Rp.");
}

/**
 * Mengembalikan data unik atau duplikat berdasarkan properti tertentu
 * @param {Array} data - Array objek
 * @param {string} uniqueKey - Nama properti untuk pengecekan keunikan
 * @param {string} mode - 'unique' untuk data unik, 'duplicate' untuk data duplikat
 * @returns {Array} Array hasil filter
 */
function filterByUniqueness(data, uniqueKey, mode = 'unique') {
  const uniqueItems = [];
  const duplicateItems = [];
  
  for (const item of data) {
    const isDuplicate = uniqueItems.find(x => x[uniqueKey] === item[uniqueKey]);
    if (!isDuplicate) {
      uniqueItems.push(item);
    } else {
      duplicateItems.push(item);
    }
  }

  if (mode === 'duplicate') {
    return duplicateItems;
  } else {
    return uniqueItems;
  }
}

/**
 * Mengecek apakah sumber dana termasuk DAK
 * @param {string} sourceName - Nama sumber dana
 * @returns {boolean} true jika DAK, false jika bukan
 */
function isDAK(sourceName) {
  return /DAK|Alokasi Khusus/i.test(sourceName);
}

/**
 * Mengecek apakah sumber dana termasuk DAU Umum
 * @param {string} sourceName - Nama sumber dana
 * @returns {boolean} true jika DAU Umum, false jika bukan
 */
function isGeneralDAU(sourceName) {
  return !/DAK|Alokasi Khusus|yang Ditentukan Penggunaannya|Tambahan Dukungan|Pajak|Retribusi|Bea|Opsen/i.test(sourceName);
}

/**
 * Mengecek apakah sumber dana termasuk DAU Peruntukkan
 * @param {string} sourceName - Nama sumber dana
 * @returns {boolean} true jika DAU Peruntukkan, false jika bukan
 */
function isEarmarkedDAU(sourceName) {
  return /yang Ditentukan Penggunaannya|Tambahan Dukungan/i.test(sourceName);
}

/**
 * Mengecek apakah sumber dana termasuk Pajak atau Retribusi
 * @param {string} sourceName - Nama sumber dana
 * @returns {boolean} true jika Pajak/Retribusi, false jika bukan
 */
function isTaxOrRetribution(sourceName) {
  return /Pajak|Retribusi|Bea|Opsen/i.test(sourceName);
}

/**
 * Mengelompokkan data berdasarkan jenis sumber dana
 * @param {Array} data - Array data dengan properti 'NAMA SUMBER DANA'
 * @param {string} sourceColumn - Nama kolom sumber dana (default: 'NAMA SUMBER DANA')
 * @returns {Object} Objek berisi kategori DAK, DAU, DAU Peruntukkan, dan Pajak/Retribusi
 */
function groupByFundingSource(data, sourceColumn = 'NAMA SUMBER DANA') {
  return {
    DAK: data.filter(x => isDAK(x[sourceColumn])),
    DAU: data.filter(x => isGeneralDAU(x[sourceColumn])),
    DAUPeruntukkan: data.filter(x => isEarmarkedDAU(x[sourceColumn])),
    PajakRetribusi: data.filter(x => isTaxOrRetribution(x[sourceColumn]))
  };
}

/**
 * Filter data berdasarkan jenis sumber dana tertentu
 * @param {Array} data - Array data
 * @param {string} fundingType - Jenis dana: 'DAK', 'DAU', 'DAUPeruntukkan', 'PajakRetribusi'
 * @param {string} sourceColumn - Nama kolom sumber dana (default: 'NAMA SUMBER DANA')
 * @returns {Array} Array data yang sudah difilter
 */
function filterByFundingType(data, fundingType, sourceColumn = 'NAMA SUMBER DANA') {
  const filters = {
    DAK: (item) => isDAK(item[sourceColumn]),
    DAU: (item) => isGeneralDAU(item[sourceColumn]),
    DAUPeruntukkan: (item) => isEarmarkedDAU(item[sourceColumn]),
    PajakRetribusi: (item) => isTaxOrRetribution(item[sourceColumn])
  };

  return data.filter(filters[fundingType] || (() => false));
}


module.exports = {
  calculateSum,
  groupByProperty,
  extractProperty,
  filterByUniqueness,
  isGeneralDAU,
  isEarmarkedDAU,
  formatToRupiah
};

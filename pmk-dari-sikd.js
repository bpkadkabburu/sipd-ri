const XLSX = require('xlsx-js-style')
const fs = require('fs')

function reducer(element, x){
    return element.reduce((accumulator, currentValue) =>{
        (accumulator[currentValue[x]] = accumulator[currentValue[x]] || []).push(currentValue);
        return accumulator;
    }, {})
}

function groupByLength(array, key) {
  return array.reduce((acc, obj) => {
    const keyValue = obj[key];
    acc[keyValue] = (acc[keyValue] || 0) + 1;
    return acc;
  }, {});
}

function create(){
  let listSubkegiatan = require('./JSON/pmk-dari-sikd-terisi-anggaran.json')
  let allJson = []
  for (const key in listSubkegiatan) {
    if (Object.hasOwnProperty.call(listSubkegiatan, key)) {
      const element = listSubkegiatan[key];
      let bidang = element.list.map(item => {
        if(item[1].length === 17){
          return {
            "kode": item[1],
            "bidang": element.bidang,
            "pagu": item[4]
          }
        }
      }).filter(item => item !== undefined)

      allJson = allJson.concat(bidang)
    }
  }

  let pathJson = `JSON\\pmk-110-dari-sikd-terisi-anggaran.json`
  if(fs.existsSync(pathJson)){
    fs.unlinkSync(pathJson)
  }

  fs.writeFile(pathJson, JSON.stringify(allJson, null, 2), function(err) { 
      if (err) {
          console.log('File JSON tidak bisa disimpan', err)
      }
      console.log('Data Berhasil Disimpan')
  });
}

function check(){
  let listSubkegiatan = require('./JSON/pmk-110-dari-sikd-terisi-anggaran.json')
  let a = groupByLength(listSubkegiatan, 'kode')
  console.log(a)
}

check()



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
    return Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(x)
}

let b = require('./lampiran41.json')
let listDinas = reducer(b, 'nama_skpd');
let TOTAL = 0
for (const key in listDinas) {
    if (Object.hasOwnProperty.call(listDinas, key)) {
        const element = listDinas[key]
        console.log('\x1b[31m%s\x1b[0m', key)
        // let duplicate = unique(element, 'kode_sub_giat')
        let listUrusan = reducer(element, 'nama_bidang_urusan')
        for (const keyUrusan in listUrusan) {
            if (Object.hasOwnProperty.call(listUrusan, keyUrusan)) {
                const urusan = listUrusan[keyUrusan];
                let duplicate = unique(urusan, 'kode_sub_giat', 'non')
                console.log('\x1b[31m%s\x1b[0m', keyUrusan)
                console.log("PAGU " + format(total(duplicate, 'pagu_indikatif')))
                let listSubkegiatan = reducer(duplicate, 'nama_sub_giat')
                for (const keySubkegiatan in listSubkegiatan) {
                    if (Object.hasOwnProperty.call(listSubkegiatan, keySubkegiatan)) {
                        const subkegiatan = listSubkegiatan[keySubkegiatan];
                        console.log(`${keySubkegiatan} ${format(total(subkegiatan, 'pagu_indikatif'))}`)
                    }
                }
            }
        }
        // console.log('\x1b[31m%s\x1b[0m', key)
        console.log("PAGU " + key + " " + format(total(element, 'pagu_indikatif')))
        // console.log("PENGURANG " + format(total(duplicate, 'pagu')))
        // let pagu = total(element, 'pagu') - total(duplicate, 'pagu')
        // console.log("REAL " +format(pagu))
        // console.log("PEMBULATAN " +format(Math.round(pagu)))
        // TOTAL += Math.round(pagu)
    }
}
console.log("\nTOTAL PAGU " + format(Math.round(TOTAL)))
// const coffee = new Promise();

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve('Kopi berhasil dibuat');
        //*fungsi yang dapat menerima satu parameter
        //*kondisi Promise akan berubah dari pending menjadi fulfilled.
    } else {
        reject('Mesin kopi tidak bisa digunakan');
        //*digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi
        //*kondisi Promise akan berubah dari pending menjadi rejected.
    }
}

const makeCoffe = () =>{
    //*Fungsi akan dijalankan secara otomatis ketika constructor Promise dipanggil
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffe()
console.log(coffeePromise);
/* output
Promise { 'Kopi berhasil dibuat' }
//* isi kata" promise  karena Executor function mengeksekusi resolve() dengan membawa data 
//* string “Kopi berhasil dibuat”
*/
//!Untuk menangani hasil dari Promise, kita gunakan method .then()
// const myPromise = new Promise(executorFunction);
// myPromise.then(onFullfilled, onREjected);
//*.then() sendiri adalah sebuah higher-order function yang membutuhkan dua parameter.
//* Keduanya adalah callback function yang juga dikenal sebagai handler

const stock = {
    coffeeBeans: 250,
    water: 1000,
};

const checkStock = () => {//* fungsi yang mengembalikan promise
    return new Promise((resolve, reject) => {
        if(stock.coffeeBeans >= 16 && stock.water >= 250){
            resolve('Stok cukup, bisa membuat kopi');
        } else {
            reject('Stok tidak cukup');
        }
    });
};

//*tambahkan dua fungsi untuk menangani masing" status
//*mencetak nilai dari parameternya.
const handleSuccess = resolvedValue =>{
    //*menangani kondisi ketika promise berstatus resolve
    console.log(resolvedValue);
}

const handleFailure = rejectionReason =>{
    //*menangani ketika promise berstatus reject
    console.log(rejectionReason);
}

//*panggil method .then() pada checkStock()
checkStock().then(handleSuccess, handleFailure);
//*Isi parameter .then() dengan dua fungsi handler yang telah kita buat sebelumnya
/* output
Stok cukup, bisa membuat kopi
*/

//! ON REJECTED WITH CATCH METHOD
//*Melalui sifatnya ini, daripada kita menetapkan logika resolve dan reject pada satu method 
//*then(), kita dapat memisahkan kedua logika tersebut menggunakan masing-masing method then()
//*Solusinya kita dapat menggunakan method lain, yakni .catch().
checkStock()
    .then(handleSuccess)
    .catch(handleFailure);
//*dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya menjadi lebih rapi

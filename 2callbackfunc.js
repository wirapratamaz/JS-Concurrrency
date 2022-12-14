// const orderCoffe = () => {
//     let coffe = null;
//     console.log('Sedang membuat kopi, silahkan menungu....');
//     setTimeout(() => {//*tidak akan menghentikan js untuk mengeksekusi kode yang ada selanjutnya
//         coffe = 'Kopi sudah jadi';
//     }, 3000);
//     return coffe;
//     //* akan dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!"
// }

// const coffe = orderCoffe();
// console.log(coffe);
/* output
Sedang membuat kopi, silakan tunggu...
null
*/

//!Tambahkan parameter dengan nama callback pada fungsi asynchronous.
// const orderCoffee = callback => {
//     let coffee = null;
//     console.log('Sedang membuat kopi, silahkan tunggu');
//     setTimeout(() => {
//         coffee = 'Kopi Sudah Jadi';
//         callback(coffee);//* gunakan callback yang diisikan dengan data yang akan dibawa
//     }, 3000);
// }

// orderCoffee(coffee => {//* fungsi orderCoffee
//     console.log(coffee);
// })
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/

//! Callback Hell
//* Callback hell terjadi karena banyak sekali callback function yang bersarang karena saling 
//* membutuhkan satu sama lain. Sehingga
//* solusi agar kita dapat menghindari callback hell? Salah satunya adalah dengan menggunakan 
//! Promise.
/*Promise memiliki tiga kondisi, yaitu:
Pending (Janji sedang dalam proses)
Fulfilled (Janji terpenuhi)
Rejected (Janji gagal terpenuhi)
*/

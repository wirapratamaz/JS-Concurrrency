//*mendapatkan nilai coffee dari sebuah proses asynchronous
//*PROMISE
// function makeCoffee() {
//     getCoffee()
//     .then(coffee => {
//         console.log(coffee);
//     });
// }

// makeCoffee();

// //*CALLBACK
// function makeCoffee() {
//     getCoffe(function(coffee) {
//         console.log(coffee);
//     });
// }

// makeCoffee();

//!fungsi getCoffee() dan bagaimana ia mengembalikan promise.
const getCoffee =() => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if(seeds >= 10){
                resolve('Kopi didapatkan');
            } else {
                reject('Biji kopi habis');
            }
        }, 1000);
    });
};

//!Mendapatkan nilai dari fungsi getCoffee() menggunakan .then()
// function makeCoffee() {
//     getCoffee()
//     .then(coffee => {
//         console.log(coffee);
//     });
// };

// makeCoffee();
/* output
Kopi didapatkan!
*/


//!Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous
async function makeCoffee() {
//*async digunakan menjalankan fungsi makeCoffee() secara asynchronous
    const coffee = await getCoffee();
    //*await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai getCoffee()
    //*mengembalikan nilai promise resolve.
    console.log(coffee);
};

makeCoffee();
/* output
Kopi didapatkan!
*/

//!Handle onRejected using async-await
//!menangani sebuah eror atau tolakan dengan menggunakan try...catch.
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {//* blok catch untuk menangani jika promise gagal dilakuka
        console.log(rejectedReason);
    }
}

makeCoffee();
//*Untuk memastikan rangkaian promise berjalan dengan sesuai, kita perlu mengembalikan (return) promise selanjutnya
const state = {
    stock: {
        coffeeBeans: 250,
        water: 500,
    },
    isCoffeeMachineBusy: false
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//*Promise constructor
            if(!state.isCoffeeMachineBusy){
                resolve('Mesin kopi siap untuk digunakan');
            } else {
                reject('Mesin kopi tidak bisa digunakan');
            }
        }, 1000);//* untuk menyimulasikan menunda proses selama 1 detik
    });
};

//*memastikan bahwa stok biji kopi dan air cukup untuk membuat kopi.
const checkStock = () => {
    return new Promise((resolve, reject) => {//*Promise constructor
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if(state.stock.coffeeBeans >= 16 && state.stock.water >= 250){
                resolve('Stok cukup, Bisa membuat kopi');
            } else {
                reject('Stok tidak cukup');
            }
        }, 1500);
    });
};

//* fungsi untuk mencampurkan kopi dan air lalu menghidangkannya ke dalam gelas.
const brewCoffee = () => {
    console.log('Sedang Membuat Kopi..........');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Kopi sudah siap');//*mengembalikan promise dengan status resolve
        }, 3000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            stat.isCoffeeMachineBusy = false;
        });
}

makeEspresso();
/* output
Mesin kopi siap untuk digunakan
Stok cukup, Bisa membuat kopi
Sedang Membuat Kopi..........
Kopi sudah siap
*/
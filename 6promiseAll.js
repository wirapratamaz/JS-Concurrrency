//!Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya. 
//!Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.
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

const brewCoffee = () => {
    console.log('Sedang Membuat Kopi..........');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Kopi sudah siap');//*mengembalikan promise dengan status resolve
        }, 3000);
    });
};

//!Function baru!!!
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log('Memanaskan air....');
        setTimeout(() => {
            resolve('Air panas sudah siap');
        }, 2000);
    });
};

const grindCofeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log('Menggiling biji kopi');
        setTimeout(() => {
            resolve('Kopi sudah siap!!');
        }, 3000);
    });
};

function makeEspresso() {
    checkAvailability()
    .then((value) => {
        console.log(value);
        return(checkStock);
    })
    .then((value) => {
        console.log(value);
        const promises = [boilWater(), grindCofeeBeans()];
        //!Keduanya dapat berjalan bersamaan. Kita akan memanfaatkan Promise.all()
        return Promise.all(promises);
    })
    .then((value) => {
        console.log(value);
        return(brewCoffee);
    })
    .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
    })
    .catch(rejectedReason => {
        console.log(rejectedReason);
        state.isCoffeeMachineBusy =false;
    })
}

makeEspresso();
/* output
[ 'Air panas sudah siap!', 'Kopi sudah siap!' ]
*/
//*Nilai dari boilWater akan tetap berada di posisi pertama, meskipun proses ini membutuhkan 
//*waktu lebih lama.
//*semua promise di dalam Promise.all() berjalan bersamaan dan menunggu sampai semua proses 
//*di dalamnya selesai dijalankan.
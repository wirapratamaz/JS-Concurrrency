async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason)
    }
};

makeEspresso();

//!menjalankan beberapa promise sekaligus secara bersamaan dengan Promise.all
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCofeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason)
    }
}
// function powersOfTwo() {
//     let num = 2
//     while(num < 66000) {
//         console.log(num);
//         num *= 2;
//     }
// // }powersOfTwo()
//
// }
//function sellSomeCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
        do {
            console.log(`Welcome to my shop! I have ${allCones} cones to sell`);
            const conesToBuy = Math.floor(Math.random() * 5) + 1;
            if (allCones <= conesToBuy) {
                allCones -= conesToBuy;
                console.log(`${conesToBuy} cones sold ...`)
            } else {
                console.log(`Cannot sell you ${conesToBuy} I only have ${allCones}`);
            }
        } while (allCones > 0);

    // Done - Generate a random number between 50 and 100 for the total cone inventory for the day
    // start loop to sell cones - each trip through the loop = 1 customer
    // reject customer if number of cones requested exceeds 5
    // check if number a customer requests exceeds remaining inventory
    // Generate a random number between 1 to 5 for customer requested amount
} console.log("Ya'ay, I sold all my cones!")

"use strict";
// // ----------------------------------------------------------------------------------------
//     const sayHello = (name) => {
//         return (`Hello, ${name}!`)
//     }
// // ----------------------------------------------------------------------------------------
//     const helloMessage = sayHello('Jay');
//         console.log(helloMessage)
// // ----------------------------------------------------------------------------------------
//     const myName = "DeadPool";
//     //const secondHelloMessage = sayHello(myName)
//         console.log(sayHello(myName))
//
// // ----------------------------------------------------------------------------------------
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
//     const random = Math.floor((Math.random() * 3) + 1);
//         console.log(random);
//         function isTwo(num1) {
//             return num1 === 2;
//         }
//         console.log(isTwo(random));
// // ----------------------------------------------------------------------------------------
//      const customerBill = prompt('Please enter the amount of your bill:');
//      const customerTipPercent = prompt("What percentage of the bill would you like to leave as a tip:");
//
//     function calculateTip(customerBill, customerTipPercent) {
//         const totalTip = (customerBill * (customerTipPercent / 100)).toFixed(2);
//         return totalTip;
//     }
//         var finalTip = calculateTip(customerBill, customerTipPercent)
//     alert(`Your final tip amount is $${finalTip}`)
//     console.log(finalTip)

// ----------------------------------------------------------------------------------------
    const fullPrice = prompt('Please enter the full price for the product:');
    const discountPercent = prompt("What is the discount percent (between 0 and 1) expected on this product:");

    function applyDiscount(fullPrice, discountPercent) {
        return fullPrice - (fullPrice * discountPercent).toFixed(2);
    }
        // var productCost = fullPrice
        // var discountConvert = discountPercent
        //
        var finalDiscount = applyDiscount(fullPrice, discountPercent)
    alert(`Your final cost after discount is $${fullPrice - finalDiscount}`)
    console.log(fullPrice - finalDiscount)
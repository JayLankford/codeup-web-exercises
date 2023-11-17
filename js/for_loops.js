// let showMultiplicationTable = 1;
//     while (showMultiplicationTable <= 10) {
//         console.log(`7 *`* ${showMultiplicationTable});
//         showMultiplicationTable++
//     }
// const seven = 7;
// function showMultiplicationTable(seven) {
//     for (let showMultiplicationTable = 1; showMultiplicationTable <= 10;  {
//         let answer = seven * showMultiplicationTable;
//         showMultiplicationTable++)
//        console.log(`I am counting by 7s: ${seven} * ${showMultiplicationTable} = ${answer}`)
// }
// }
// Problem 2 - I couldn't overcome the requirement to have a function, but the multiplication works.
const seven = 7;
for (let showMultiplicationTable = 1;
     showMultiplicationTable <= 10;
     showMultiplicationTable++) {
        let answer = seven * showMultiplicationTable;
       console.log(`I am counting by 7s: ${seven} * ${showMultiplicationTable} = ${answer}`)
}
// Problem 3
'use strict';
    for (let theNumber = 0; theNumber < 10; theNumber++) {
        let theseNumbers = Math.floor((Math.random() * 200 - 20 + 1)) + 20;
        if (theseNumbers % 2 === 0) {
            console.log(`${theseNumbers} is even`);
        } else {
            console.log(`${theseNumbers} is odd`);
        }
        // if (count <= 10);
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration

        continue;
    }
        console.log('We are done with this excercise');

// Problem 4
for (let countingExpanding = 1; countingExpanding <= 9; countingExpanding++) {
    let expansion = '';

    for (let newCounter = 1; newCounter <= countingExpanding; newCounter++) {
        expansion += countingExpanding;
    }
    console.log(expansion);
}
// Problem 5
for (let countDown = 100; countDown >= 5; countDown -= 5){
    console.log('counting in a for loop ' + countDown);
}


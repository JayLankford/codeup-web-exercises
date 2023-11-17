    num1 = prompt("Please select an odd number between 1 and 50");
    do {
        if (!isNaN(num1) && num1 % 2 !== 0 && num1 >= 0 && num1 < 50) {
            console.log(`User has selected the number ${num1}`);
            break;
        } else {
            console.log(`${num1} is an invalid input. Please enter an odd number between 1 and 50!`);
        }
} while (true);

function numberList() {
    const num3 = num1
}
for (let num2 = 0; num2 < 50; num2++) {
    if (num2 % 2 !== 0) {
        console.log(`the counter is at ${num2}`);
    } continue;
         {
            if(num2 == num1) {
                console.log(`Yikes! Skipping number ${num1}`);
            } else {
                console.log(`Here is an odd ${num2}`)
    }

    // if(countNumber === num1) {
    //     break;
    //     console.log(`Yikes, skip number ${num1}!`);
}

// do {
//     // Prompt the user for input
//     userInput = prompt("Enter an odd number between 0 and 50:");
//
//     // Convert the user input to a number
//     let numberInput = parseInt(userInput);
//
//     // Check if the input is a valid odd number within the specified range
//     if (!isNaN(numberInput) && numberInput % 2 !== 0 && numberInput >= 0 && numberInput <= 50) {
//         // Valid input
//         break;
//     } else {
//         // Invalid input, notify the user and repeat the loop
//         alert("Invalid input. Please enter a valid odd number between 0 and 50.");
//     }
// } while (true);
//
// // At this point, userInput contains a valid odd number between 0 and 50
// console.log(`You entered a valid odd number: ${userInput}`);

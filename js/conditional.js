"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// // Done -- Create a function named `analyzeColor` that accepts a string that is a color name as input.
// // Done -- function should return a message which relates to the color stated in the argument of the function
// // Done -- For colors you do not have responses written for, return a string stating so
//
// // function analyzeColor(color) {
// //     if (color === "blue") {
// //         return `Blue is the color of the ocean near pristine beaches`;
// //     } else if (color === "green") {
// //         return `green is the color normally found in trees during spring and summer.`;
// //     } else if (color === "red") {
// //         return `red is the stopping color at a stop light!`;
// //     } else if (color === "orange") {
//     //         return `orange is the color of a citrus fruit.`;
// //     } else if (color === "yellow") {
// //         return `yellow is the color we see when we look at the sun!`;
// //     } else if (color === "violet") {
// //         return `violet is the color of bluebonnets!`;
// //     } else {
// //             return `I have no idea about the ${color}`;
// //         }
// // }
// // var color = "green"
// // var result = analyzeColor(color)
// // console.log(result)
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// //console.log(analyzeColor(randomColor));;
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//
// //          function analyzeColor(color) {
// //              let returnMessage;
// //          switch(color) {
// //              case "blue":
// //                  returnMessage ("Blue is the color of the ocean near pristine beaches");
// //                  break;
// //              case "green":
// //                  returnMessage ("Green is the color of the ocean near pristine beaches");
// //                  break;
// //              case "red":
// //                  returnMessage ("Red is the color of the ocean near pristine beaches");
// //                  break;
// //              case "orange":
// //                  returnMessage ("Orange is the color of the ocean near pristine beaches");
// //                  break;
// //              case "yellow":
// //                  returnMessage ("Yellow is the color of the ocean near pristine beaches");
// //                  break;
// //              case "violet":
// //                  returnMessage ("Violet is the color of the ocean near pristine beaches");
// //                  break;
// //              default:
// //                  returnMessage ("I have no idea about the color you have selected!");
// //                  break;
// //         }
// //             return returnMessage;
// // }
// // console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
// // const color1 = prompt("Please input a color from the rainbow!")
// // function analyzeColor(color1) {
// //     switch(color1) {
// //         case "blue":
// //             alert ("Blue is the color of the ocean near pristine beaches");
// //             break;
// //         case "green":
// //             alert ("Green is the color of the ocean near pristine beaches");
// //             break;
// //         case "red":
// //             alert ("Red is the color of the ocean near pristine beaches");
// //             break;
// //         case "orange":
// //             alert ("Orange is the color of the ocean near pristine beaches");
// //             break;
// //         case "yellow":
// //             alert ("Yellow is the color of the ocean near pristine beaches");
// //             break;
// //         case "violet":
// //             alert("Violet is the color of the ocean near pristine beaches");
// //             break;
// //         default:
// //             alert ("I have no idea about the color you have selected!");
// //             break;
// //     }
// // }
// // alert(color1);
// // console.log(analyzeColor(color1));
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// //const luckyNum = Math.floor(Math.random() * 5);
// // function calculateTotal(luckyNum, totalAmt) {
// //          if (luckyNum === 0) {
// //            return "you must pay the full amount";
// //          } else if (luckyNum === 1) {
// //            return totalAmt * 0.9;
// //          } else if (luckyNum === 2) {
// //              return totalAmt * 0.75;
// //          } else if (luckyNum === 3) {
// //              return totalAmt * 0.65;
// //          } else if (luckyNum === 4) {
// //              return totalAmt * 0.5;
// //          } else {
// //              return "You get everything for free!";
// //      }
// // }
// // var luckyNum = 5
// // var totalAmt = 500
// // console.log(calculateTotal(luckyNum, totalAmt));
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// // alert (luckyNumber)
// const totalAmt = prompt ("What is the total amount of your bill: ");
// function calculateTotal(luckyNum, totalAmt) {
//     if (luckyNum === 0) {
//         return "you must pay the full amount";
//     } else if (luckyNum === 1) {
//         return totalAmt * 0.9;
//     } else if (luckyNum === 2) {
//         return totalAmt * 0.75;
//     } else if (luckyNum === 3) {
//         return totalAmt * 0.65;
//     } else if (luckyNum === 4) {
//         return totalAmt * 0.5;
//     } else {
//         return "You get everything for free!";
//     }
// }
// var luckyNum = luckyNumber
// var totAmt = totalAmt
// const finalBill = (calculateTotal(luckyNum, totAmt))
// alert (`Your lucky number is ${luckyNumber}`)
// alert (`Your total bill is $${totalAmt}`)
// alert (`Your bill after discount is $${finalBill}`)
// // console.log(calculateTotal(luckyNum, totAmt));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// const confirmed = confirm('Would you like to enter a number?');
//  //       if (confirmed) {
                const userNumber = Number(prompt("Enter your favorite number: "));
                if(!isNaN(userNumber)) {
                    const isEven = userNumber % 2 === 0;
                    alert (`${userNumber} is ${isEven ? 'even' : 'odd'}`);

                    // let isEven;
                    //     if(userNumber % 2 === 0) {
                    //         isEven = true;
                    //     } else {
                    //         isEven = false;
                    //     }
                    //     if(isEven) {
                    //         alert(`${userNumber} is even`);
                    //     } else  {
                    //         alert (`${userNumber} is odd`);
                    //     }


                    const numPlus100 = userNumber + 100;
                    alert(`${userNumber} + 100 = ${numPlus100}`);

                    const isPositive
                    -userNumber >= 0;
                    alert(`${userNumber} is ${isPositive ? 'is positive' : 'is negative'}`);
                }
// console.log(confirmed); // will be either true or false
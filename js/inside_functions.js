// console.log("Inside Functions.js");
//
// let someNumber = parseInt("12");
//     console.log(someNumber);
//
// let anotherNumber = 12;
//
// //Both of these lines of code do the same thing.
// console.log(someNumber + anotherNumber);
// console.log(parseInt("12") + anotherNumber);
//
// let someNumbericalString= "12";
// let someNumber = parseInt(someNumericalString);
//     console.log(someNumericalString)

// function someFunction(input1, input2) {
//     console.log(`The first input is ${input1}`);
//     console.log(`The second input is ${input2}`);
//     let output = 1;
//     return output;
// }
//
// function helloWorld() {
//     console.log("Hello, World!");
// }
// helloWorld();

// function addTwoNumbers(num1, num2) {
//     let total = num1 + num2;
//     return total;
//     return num1 + num2
// }

// const addTwoNumbers = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNumbers);
//
// const addTwoNumbners = (num1, num2) => {
//     return num1 + num2;
// }
// addtwonumbners(6,5)

// function helloWorld() {
//     console.log("Hello, World!");
// }
// helloWorld();
const helloWorld = (name = 'world') => {
    console.log(`Hello, ${name}`);
}
helloWorld;
helloWorld();
helloWorld("Jay");

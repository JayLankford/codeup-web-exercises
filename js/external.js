"use strict";
console.log("Hello from external Javascript")

//Alert Action
alert("Welcome to my website.");

//Prompt Action
let userFavoriteColor = prompt('What is your favorite color:');
console.log(`Great, ${userFavoriteColor} is my favorite color too`);

//Exercise 3 from Working with Data Types, Operators, and Variables
let littleMermaidRentedDays = Number(prompt("How many days did you rent The Little Mermaid:"))
let brotherBearRentedDays = Number(prompt("How many days did you rent Brother Bear:"))
let herculesRentedDays = Number(prompt("How many days did you rent Hercules:"))
let rentedRatePerDay = Number(prompt("How much did you pay to rent per day:"))
let costForRental = (littleMermaidRentedDays + brotherBearRentedDays + herculesRentedDays) * rentedRatePerDay
alert(`I paid a total of $${costForRental}.00 to watch all of these movies!`)
console.log(`I paid a total of $${costForRental}.00 to watch all of these movies!`)

let googleRatePerHour = Number(prompt("How much was your hourly wage when working at Google:"))
let amazonRatePerHour = Number(prompt("How much was your hourly wage when working at Amazon:"))
let facebookRatePerHour = Number(prompt("How much was your hourly wage when working at FaceBook:"))
let googleWorkedHours = Number(prompt("How many hours did you work for Google:"))
let amazonWorkedHours = Number(prompt("How many hours did you work for Amazon:"))
let facebookWorkedHours = Number(prompt("How many hours did you work for FaceBook:"))

let payCheck = googleRatePerHour * googleWorkedHours + amazonRatePerHour * amazonWorkedHours + facebookRatePerHour * facebookWorkedHours
alert(`I earned a total of $${payCheck}.00 for working at Amazon, Facebook and Google.`)

console.log(`I earned a total of $${payCheck}.00 for working at Amazon, Facebook and Google.`)

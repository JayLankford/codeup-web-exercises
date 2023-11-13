"use strict";
console.log("Hello from external Javascript")

//Alert Action
alert("Welcome to my website.");

//Prompt Action
let userFavoriteColor = prompt('What is your favorite color:');
console.log(`Great, ${userFavoriteColor} is my favorite color too`);

//Exercise 3 from Working with Data Types, Operators, and Variables
let littleMermaidRentedDays = prompt("How many days did you rent The Little Mermaid:")
let brotherBearRentedDays = prompt("How many days did you rent Brother Bear:")
let herculesRentedDays = prompt("How many days did you rent Hercules:")
let rentedRatePerDay = prompt("How much did you pay to rent per day:")
let googleRatePerHour = prompt("How much was your hourly wage when working at Google:")
let amazonRatePerHour = prompt("How much was your hourly wage when working at Amazon:")
let facebookRatePerHour = prompt("How much was your hourly wage when working at FaceBook:")
let googleWorkedHours = prompt("How many hours did you work for Google:")
let amazonWorkedHours = prompt("How many hours did you work for Amazon:")
let facebookWorkedHours = prompt("How many hours did you work for FaceBook:")
let costForRental = littleMermaidRentedDays * rentedRatePerDay + brotherBearRentedDays * rentedRatePerDay + herculesRentedDays * rentedRatePerDay
let payCheck = googleRatePerHour * googleWorkedHours + amazonRatePerHour * amazonWorkedHours + facebookRatePerHour * facebookWorkedHours

console.log(costForRental)
console.log(payCheck)

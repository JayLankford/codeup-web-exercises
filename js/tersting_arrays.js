let firstTestArray = [5, 1, 3, 6, 10, 123];
// console.log(firstTestArray.length);
// console.log(firstTestArray[5]);

for (let i = 0; i < firstTestArray.length; i++) {
    console.log(firstTestArray[i]);
}

for(let num of firstTestArray) {
    console.log(num);
}
firstTestArray.forEach(num =>{
    console.log(num);
})


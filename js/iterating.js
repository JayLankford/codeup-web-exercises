// console.log("inside of iterating arrays")

const names = ['John', 'James', 'Juliet', 'Janet'];
    console.log('This provides the number of objects in this Array')
        console.log(names.length);

    console.log('This is the names listed out in the Array')
        console.log(names);

    console.log('This is the names in order for the Array');
    for (const item of names) {
        console.log('The names in order are: ' + item);
        }

        console.log('This is the forEach display of the array');
        names.forEach(name => console.log(`The names in this array are: ${name}.`));


function getRandomItem(array) {
    if(array.length === 0) {
        return "Array is Empty.";
    }
    let randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
}
function firstItem(array) {
    if(array.length > 0) {
        return array[0];
    }else {
        return "Array is Empty.";
    }
}
function secondItem(array) {
    if(array.length > 0) {
        return array[1];
    }else {
        return "Array is Empty.";
    }
}
function thirdItem(array) {
    if(array.length > 0) {
        return array[4];
    }else {
        return "Array is Empty.";
    }
}
let theArray = ['Ford', 'Chevrolet', 'Dodge', 'Lexus', 'Acura'];
console.log(firstItem(theArray));
console.log(secondItem(theArray));
console.log(thirdItem(theArray));
console.log("This returns a random item from the Cars Brand Array")
console.log(getRandomItem(theArray));

(function() {
'use strict';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

console.log('Adding "The Sun" to the beginning of the planetrs array.');
planets.unshift('The Sun');
console.log(planets);

console.log('Adding "Pluto" to the end of hte planets array.');
planets.push('Pluto');
console.log(planets);

console.log('Removing "The Sun" from the beginning of the planets array.');
planets.shift('The Sun');
console.log(planets);

console.log('Removing "Pluto" from the end of hte planets array.');
planets.pop('Pluto');
console.log(planets);

console.log('Finding and logging the index of "Earth" in the planets array.');
let index = planets.indexOf('Earth');
console.log(index);

console.log('Reversing the order of hte planets array.');
const reversePlanets = [...planets];
reversePlanets.reverse();
console.log(reversePlanets);

console.log("Sorting the planets array.");
const sortingPlanets = [...planets];
sortingPlanets.sort();
console.log(sortingPlanets);

})();
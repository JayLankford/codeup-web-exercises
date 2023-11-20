(function() {
'use strict';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

planets.unshift('The Sun');
console.log(planets);

planets.push('Pluto');
console.log(planets);

planets.shift('The Sun');
console.log(planets);

planets.pop('Pluto');
console.log(planets);

let index = planets.indexOf('Earth');
console.log(index);

const reversePlanets = [...planets];
reversePlanets.reverse();
console.log(reversePlanets);

const sortingPlanets = [...planets];
sortingPlanets.sort();
console.log(sortingPlanets);

})();
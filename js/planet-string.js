(function() {
    'use strict';
    console.log("inside of planet-string.js");
    const planetString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Nepture";
   // const planetsArray;

    // const planetArray = planetString.split(',');
    // console.log(planetArray);
    //
    // const updatedPlanetArray = planetArray.join("<br>");
    // console.log(updatedPlanetArray);

    const planetsListArray = planetString.split('|');

    const ulElement = document.createElement('ul');

    planetsListArray.forEach(function(item){
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);

})();
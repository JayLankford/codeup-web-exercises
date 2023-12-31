(function() {
    'use strict';
    console.log("inside of planet-string.js");
    const planetString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    const planetArray = planetString.split('|');
    console.log(planetArray);

    const updatedPlanetArray = planetArray.join("<br>");
    console.log(updatedPlanetArray);

    const planetsListArray = planetString.split('|');

    const ulPlanetString = `<ul><li>${planetArray.join("</li><li>")}</li></ul>`;
    console.log(ulPlanetString);

    const ulElement = document.createElement('ul');

    planetsListArray.forEach(function(item){
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);

})();
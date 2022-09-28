const myElement = document.getElementById('conteneur');

console.log(myElement);

/*AJOUT DE DIV*/
const ajoutDiv = document.createElement('div');

let recupDiv = document.getElementById('conteneur');

recupDiv.appendChild(ajoutDiv);

ajoutDiv.innerHTML = ("<p>Montpellier</p>")

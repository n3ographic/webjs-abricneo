const myElement = document.getElementsByClassName('element');
console.log(myElement);

for (let i = 0; i < myElement.lenght; i++){
    console.log(myElement)
}

/*AJOUT DE DIV*/
const ajoutDiv = document.createElement('div');

let recupDiv = document.getElementById('conteneur');

recupDiv.appendChild(ajoutDiv);

ajoutDiv.innerHTML = ("<p>Montpellier</p>")
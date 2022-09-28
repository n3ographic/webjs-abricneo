const myElement = document.getElementById('conteneur');

console.log(myElement);

/*AJOUT DE DIV*/


for (i = 0; i < 2; i++){
    const ajoutDiv = document.createElement('div');
    ajoutDiv.setAttribute('id', 'element')

    let recupDiv = document.getElementById('conteneur');
    
    recupDiv.appendChild(ajoutDiv);
    
    ajoutDiv.innerHTML = ("<p>Montpellier</p>");
}

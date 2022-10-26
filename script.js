const myElement = document.getElementById('conteneur');

console.log(myElement);

/*AJOUT DE DIV*/

/*Ajout de div avec des éléments à l'interieur*/
for (i = 0; i < 5; i++){
    const ajoutDiv = document.createElement('div');
    ajoutDiv.setAttribute('id', 'element')

    let recupDiv = document.getElementById('conteneur');
    
    recupDiv.appendChild(ajoutDiv);
    
    ajoutDiv.innerHTML = ("<p>Montpellier</p>");
}

/*Comptage clique bouton*/
const boutonClick = document.getElementById('boutonAdd')

let comptageClick = 0

 boutonClick.addEventListener('click', function(){

    comptageClick = comptageClick+1;

    console.log("tu as cliqué " + comptageClick);
 });


 localStorage.setItem("prenom", "neo")

 localStorage.getItem("prenom")


 let objJson ={
    prenom: "dany",
    nom: "abric",
    age : 30
 }

 let objLinea = JSON.stringify(objJson);
 localStorage.setItem("obj",objLinea);

 objLinea = localStorage.getItem("obj");
 objJson = JSON.parse(objLinea);

 alert(objJson.age)







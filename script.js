const myElement = document.getElementById('conteneur');

console.log(myElement);

/*AJOUT DE DIV*/


for (i = 0; i < 5; i++){
    const ajoutDiv = document.createElement('div');
    ajoutDiv.setAttribute('id', 'element')

    let recupDiv = document.getElementById('conteneur');
    
    recupDiv.appendChild(ajoutDiv);
    
    ajoutDiv.innerHTML = ("<p>Montpellier</p>");
}


const boutonClick = document.getElementById('boutonAdd')
let comptageClick = 0
 boutonClick.addEventListener('click', function(){
    comptageClick = comptageClick+1;
    console.log("tu as cliqué " + comptageClick)
    
    //console.log("click")
    /*for(let click = 0; click <  1; click++ ){
        console.log("tu as cliqué" + [click+1])
    }*/
 });





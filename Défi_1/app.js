//Créer un event listner de type click qui déclenchera la fonction loadData

var btn = document.getElementById('button');


btn.addEventListener('click',loadData);

// la fonction loadData

function loadData(){

    var request= new XMLHttpRequest(); // Créer un objet XMLHttpRequest

    var result= document.getElementById('output'); //  declarer l'emplacement d'affichage de resultat de la requete
    
    request.onreadystatechange = function() {      // fonction pour analyser le process de la requete envoyé
        console.log(this);
        
        if(this.readyState == 4 && this.status == 200){

            result.innerHTML=this.response;    

        }
        else if (this.response == 4 && this.status == 404){

            alert('erreur 404');
        }   
    };

    request.open('GET', 'data.txt'); // Charger les données à partir  le fichier data.txt
    request.responseType = 'text';
    request.send();

        
    }

    




var dateGlobal = new Date();
var heureGlobal = new Date();

var année = dateGlobal.getFullYear();
var mois = dateGlobal.getMonth();
var jour = dateGlobal.getDate();
var heure = heureGlobal.getHours();
var minutes = heureGlobal.getMinutes();
var seconds = heureGlobal.getSeconds();
var MOIS = [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
 mois = MOIS[mois]

document.getElementById("date").innerHTML = jour + " " + mois + " " + année ;
document.getElementById("heure").innerHTML = heure + ":" + minutes + ":" + seconds;


$(document).ready(function(){
    
    $('#accueil').click(function(){
    $('.date-heure').hide();
    })
});



function loadDoc(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){

                document.getElementById("description").innerHTML =
                this.responseText;
            }
    };

    xhr.open("GET", "../fiches-technique.txt", true)
    
    xhr.send();
}
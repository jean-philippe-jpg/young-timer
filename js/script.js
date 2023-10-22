
$(document).ready(function(){

   $('#106').click(function(){

    $('.deux, .trois, .quatre, .cinq').hide();
    $('.un').show();
   })

    $('#205').click(function(){

        $('.un, .trois, .quatre, .cinq').hide();
        $('.deux').show();
    })

    $('#305').click(function(){

        $('.un, .deux, .quatre, .cinq').hide();
        $('.trois').show();
       })

       $('#405').click(function(){

        $('.un, .deux, .trois, .cinq').hide();
        $('.quatre').show();
       })

       $('#505').click(function(){

        $('.un, .deux, .trois, .quatre,').hide();
        $('.cinq').show();
       });

        $('#fiche-technique').click(function(){
        $('.annonces').hide();
        $('.date-heure').hide();
    })

        $('.annonces-peugeot').click(function(){
            $('.date-heure').hide();
        })

});

        $('.accueil').click(function(){
            $('.annonces').hide();
        })


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




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
       })

        $('#fiche-technique').click(function(){
            $('#fiche').show();
        $('.card-annonce, #annonces-option, #annonces-input, .date-heure').hide();
    })

        $('#annonces-peugeot').click(function(){
            $('.card-annonce, #annonces-input, #annonces-option').show();
            $('#fiche, .date-heure').hide();
        })


        $('#accueil').click(function(){
            $('.date-heure').show();
            $('#annonces-input, #annonces-option, .card-annonce, #fiche').hide();

        })

        $('#accueil-drop').click(function(){
            $('.date-heure').show();
            $('#annonces-input, #annonces-option, .card-annonce, #fiche').hide();
        })

        $('#annonces-peugeot-drop').click(function(){
            $('.card-annonce, #annonces-input, #annonces-option').show();
            $('#fiche, .date-heure').hide();
        })
        
        $('#fiche-technique-drop').click(function(){
            $('#fiche').show();
        $('.card-annonce, #annonces-option, #annonces-input, .date-heure').hide();
    })

        $('.navbar-brand').click(function(){
            $('.date-heure').show();
        })


        $('.menu').click(function(){

            $('#drop-down').show();
            $('#drop-down').css({ "border-radius": "12px","margin-top": "5vh", "margin-left": "20px", "position": "fixed", "height": "250px", "width": "150px", "background": "orange"});
            $('.menu-drop').css({"display": "block", "margin-top": "30px"});
            $('#close').css({"color-text": "black"});
        })

        $('.btn-close').click(function(){
            $('#drop-down').hide();
        })


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




function loadDoc() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("fiche").innerHTML =
                this.responseText;

        }
    };

    xhr.open("GET", "../fiches-technique.txt", true);
    xhr.send();

};





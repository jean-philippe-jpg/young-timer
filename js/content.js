



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
    })

        $('.annonces-peugeot').click(function(){

            $('.annonces').show();
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



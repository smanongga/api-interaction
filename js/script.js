$(document).ready(function() {
          $("#button").click(function(event){
            $.getJSON('https://eda-te-reo.herokuapp.com/api/proverbs', function(data) {
              
                $('#squareBox').html('<h2>"' + data["source"] + '"</h2>');
                $('#squareBox').append('<h4>Translation:</h4><p>' + data["translation"]+ '</p>');
             });
          });
       });

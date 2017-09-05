$(function () {

         $('div').css({
            width: '200px',
            height: '200px',
            background: 'red',
            position: 'absolute'

         });

         $("button").click(function () {
               var div = $("div");
               div.animate({
                     left: '200px',
                     height: '100px',
                     width: '100px',
                  }, 3000, function () {
                     $(this).animate({
                           backgroundColor: 'blue',
                        }, 5000, function () {
                           $('div').append("<p>Koniec animacji</p>");
                        },


                     });

               });


         });

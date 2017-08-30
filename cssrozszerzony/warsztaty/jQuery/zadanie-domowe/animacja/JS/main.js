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
         $(this).css({
               background: 'blue',

            }, 5000),
            $('div').append("<p>Koniec animacji</p>");
      });

   });


});

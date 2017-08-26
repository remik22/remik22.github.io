$(function () {
   //pojedyncze zdarzenie na paragrafie
   $('p').click(function () {
      $(this).css('color', 'orange');
   });

   //grupa zdarzen na naglowku

   $('h1').on({
      'click': function () {
         $(this).css('color', 'red');
      },
      'mouseleave': function () {
         $(this).css('color', 'inherit');
      }
   });


});

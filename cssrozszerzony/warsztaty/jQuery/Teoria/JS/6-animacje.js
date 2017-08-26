$(function () {


   $('h2').click(function () {
      $(this).hide(3000);
   });

   //efekt hide i show
   $('p').hide(3000).show(3000);

   //efekt fadeou \t i fadein
   $('h1').fadeIn(3000).fadeOut(3000);
   //efekt slide up
   $('h2').slideUp(3000).slideDown(3000);


   function animacja() {
      console.log('zakonczono pierwsza animację. zaraz stratuje druga');
      $('h3').animate({
         'font-size': '1em',
         'margin-left': '0px'
      }, 2000);
   }


   $('h3').animate({
      'font-size': '3em',
      'margin-left': '100px'
   }, 2000, animacja);


});

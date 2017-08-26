$(function () {
   //wybieranie elementu z kolekcji-tablicy za pomocą metody eq()
   $('body').find('p').eq(1).css('color', 'green');

   //petla each dodająca do paragafow klase z kolejnym numerem
   $('p').each(function () {
      $(this).addClass('paragraf-c' + index);

   });



});

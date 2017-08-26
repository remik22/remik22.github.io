$(function () {
   //poberanie tekstu
   var textParagrafuPierwszego = $('#paragraf').text();
   console.log(textParagrafuPierwszego);

   //Dodawanie tekstu
   $('.paragraf').text(textParagrafuPierwszego);

   //dodawanie HTML

   $('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br> HTML')

   //dodanie tresci na koncu selektora
   $('.paragrafnext').append('traść na końcu selektora');

   //dodanie tresci za selektorem
   $('.paragrafnext').after('tresc za selektorem');

   //usuwanie elemetu i jego zawartosci
   $('strong').remove();

   //usuwanie tylko zawartosci elemetu
   $('.paragraf').empty();

   //dodawanie klasy
   $('h1').addClass('blue');

   //dodawanie atrybutu

   $('h1').attr('imie', 'Marcin');


});

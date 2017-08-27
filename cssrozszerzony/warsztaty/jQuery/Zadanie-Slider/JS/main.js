$(function () {
   //zmienne
   var slider = $('#slider');
   var slideShow = $('.slide-show');
   var slideCount = slideShow.children().length;
   var slideWidth = 100 / slideCount;
   var slideIndex = 0;

   slideShow.css('width', slideCount * 100 + ' % ');
   /// funkcja animujaca ktorej parametrem jest nowy index slajdu

   function slide(newSlideIndex) {
      if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
         return;
      }
      var slideCaption = $('.slider-caption').eq(newSlideIndex);
      slideCaption.hide();
      var marginLeft = (newSlideIndex * (-100)) + '%';
      slideShow.animate({
         'margin-left': marginLeft
      }, 800, function () {
         slideIndex = newSlideIndex;
         slideCaption.fadeIn('slow');
      });

   };

   //szerokosc kontenera slideshow



   //iteracja po wszystkich slajdach i nadanie im marginesów oraz szerokosci

   slideShow.find('.single-slide').each(function (index) {
      $(this).css({
         'width': slideWidth + '%',
         'margin-left': index * slideWidth + '%'
      });
      // przycisk poprzedni - wywołanie funkcji slider
      $('.prev-slide').click(function () {
         slide(slideIndex - 1);

      });


   });
});

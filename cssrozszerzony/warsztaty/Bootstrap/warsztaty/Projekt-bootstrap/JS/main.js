$(document).ready(function () {
   navAddClass();
});

$(window).scroll(function () {
   navAddClass();
})

function navAddClass() {
   var navHeight = $('#main-nav').height();
   console.log(navHeight);

   var windowScrollPostition = $(window).scrollTop();
   console.log(windowScrollPostition);
   if (windowScrollPostition >= navHeight) {
      $('#main-nav').addClass('scrolled');
   } else {
      $('#main-nav').removeClass('scrolled');
   }
}

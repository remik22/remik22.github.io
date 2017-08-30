$('button#up').click(function () {
   $('div > p:last').prependTo('div > p:first');


});

$('button#down').click(function () {
   $('div > p:first').appendTo('div > p:last');


});

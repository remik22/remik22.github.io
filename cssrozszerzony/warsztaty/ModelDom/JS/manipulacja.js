'use strict';

var mainHeader = document.getElementById('main-header');
//przypisujemy naglowek do zmiennej

mainHeader.innerHTML = "Treść nagłówka";
//Dodajemy treśc do nagłówka

var link = document.getElementsByClassName('link')[0];
//przypisujem pierwszys link do zmiennej
console.log(link);
link.href = "http://akademiakodu108.pl";
//nadpisuejmy atrybut href w link

link.className = 'Nowa-klasa';
//nadpisujemy nazwe klasy w linku

link.style.background = '#11aa22';
//dodajemy styl

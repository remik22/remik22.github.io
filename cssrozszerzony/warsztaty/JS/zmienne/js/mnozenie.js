'use strict';

function mnozenie(tablicaLiczb) {
	tablicaLiczb.forEach(function (element, index) {
		iloczyn *= element;
	});
	return iloczyn;

}

var tablica = [4, 5, 10, 8];

console.log(mnozenie(tablica));

// element - dan element tablic na którm obecnie znajduje sie pętla (dla pierwszego obiegu jest to pierszy element, dla drugiego drugi itd)

// index - index danego elementu tablic na którym obecnie znajduje się pętla (dla pierwszego obiegu jest to indeks 0 dla drugiego jest to indeks 1)

'use strict';

function multiply(param1, param2, param3) {
	var result = param1 * param2 * param3;
	return result;
}
var wynik = multiply(3, 9, 10);
console.log(wynik);

//*****************

var funkcja = function () {
	return "wynik";
}

console.log(funkcja);
console.log(funkcja());

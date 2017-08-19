'use strict';
var liczba1 = 13,
    liczba2 = 5;

var wynik;
wynik = liczba1 % liczba2;
console.log("krok 1: " + wynik);
//zwraca reszte  z dzielenia

//console.log("krok 1: " + wynik);
//console.log("krok 2: " + wynik++);
//console.log("krok 3: " + wynik);
console.log("==============");
console.log("krok 1: " + wynik);
console.log("krok 2: " + ++wynik);
console.log("krok 3: " + wynik);

liczba1 += 8;
//liczba1 = liczba1 + 8, zwieksza o 8.
var tekst = "Wojtek";
tekst += "Potocki";
console.log(tekst);

console.log("***********************************");

var liczba = 10;
var text = "10";


console.log(liczba == text); //*sprawdza tylko wartość
console.log(liczba === text); //*sprawdza typ i wartość
console.log(liczba !== text); //*sprawdza typ i wartość

console.log("***********************************");

console.log(13 == 5 || 10 == "10");

console.log("***********************************");
(2 > 5) ? console.log("tak"): console.log("nie");

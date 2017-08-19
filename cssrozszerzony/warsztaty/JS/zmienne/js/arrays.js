'use strict';

var imiona = ["Monika", "Krystian", "Łukasz", ];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);
imiona[2] = "Ela";
console.log(imiona);

imiona.push("Gerald");
console.log(imiona);


imiona.pop();
console.log(imiona);


console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log("ilość elementów w  tablicy: " + imiona.length);
console.log(imiona);

var imie = "Adam";
console.log(imie.length);

console.log("================");
console.log(imiona);
console.log(imiona.join(" - "));

console.log(imiona.reverse());

imiona.sort();
console.log(imiona);

var imionaMeskie = ["Wojtek", "Michal", "Andrzej"];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona męskie: " + imionaMeskie);


console.log(zbiorImion.indexOf("Michal"));

console.log(Array.isArray(zbiorImion));
//sprawdza czy jest taka tablica

console.log(zbiorImion.slice(2, 5));
//zwraca wartośc od 2 do 5 bez 5
console.log(zbiorImion);

zbiorImion.splice(2, 3, "Zenek", "Grzegorz");
console.log(zbiorImion);

console.log(zbiorImion.toString());

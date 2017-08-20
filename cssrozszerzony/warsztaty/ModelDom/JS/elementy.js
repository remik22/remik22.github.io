'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];
console.log(istniejacyWezel);
var newElement = document.createElement('p');

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzy nowy tekst dla elementu p

newElement.appendChild(newElementContent); //dodaje tekst do elementu p
console.log(newElement);

istniejacyWezel.appendChild(newElement); //dodaje element

istniejacyWezel.removeChild(newElement); //usuwa element

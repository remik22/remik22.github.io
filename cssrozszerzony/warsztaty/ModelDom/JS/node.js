'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.firstChild);

//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling);
console.log(pierwszyDiv.nodeType);

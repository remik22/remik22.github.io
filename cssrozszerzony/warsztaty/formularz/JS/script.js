'use strict';



var wyslijBtn = document.getElementById('wyslij');

function waliduj() {
   if (document.getElementById('name').value.trim() == "") {
      alert('Wypełnij imię');
   }
}
wyslijBtn.addEventListener('click', waliduj);



//function checkboxState() {
//
//}
//
//var wszystkieZgody = document.querySelector('input[type=checkbox]')[2];
//var wszyskieBoxy = document.querySelectorAll('input[type=checkbox]');

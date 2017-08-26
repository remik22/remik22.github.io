'use strict';



var wyslijBtn = document.getElementById('submit'); //przycisk submit
var wszystkieZgody = document.getElementById('zgoda3'); //checkbox zgoda3

//zaznaczenie checboxow
function stanCheckbox() {
   if (wszystkieZgody.checked) {
      document.getElementById('zgoda1').checked = true;
      document.getElementById('zgoda2').checked = true;

   } else {
      document.getElementById('zgoda1').checked = false;
      document.getElementById('zgoda2').checked = false;
   }
}
document.getElementById('zgoda3').onchange = stanCheckbox;


function waliduj() {
   if (document.getElementById('name').value.trim() == "") {
      alert('Wypełnij imię');
   }
   if (document.getElementById('email').value.trim() == "") {
      alert('Wypełnij email');
   }
   if (document.getElementById('zgoda1').checked != true) {
      alert('Zaznacz pierwszą zgodę')
   }
}
wyslijBtn.addEventListener('click', waliduj);
wszystkieZgody.addEventListener('change', stanCheckbox);


//function checkboxState() {
//
//}
//
//var wszystkieZgody = document.querySelector('input[type=checkbox]')[2];
//var wszyskieBoxy = document.querySelectorAll('input[type=checkbox]');

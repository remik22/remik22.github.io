$(function () {
   $("#pobierz").click(function () {
      $.ajax({
         url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
         dataType: 'json',
         success: function (resultJson) {
            console.log(resultJson);
            var userImie = document.createElement('div');
            userImie.id = "dane-programisty";
            var userNazwisko = document.createElement('p');
            var userZawod = document.createElement('p');
            var userFirma = document.createElement('p');
            userImie.innerHTML = '<b>Imię</b>: ' + resultJson.imie;
            userNazwisko.innerHTML = '<b>Nazwisko</b>: ' + resultJson.nazwisko;
            userZawod.innerHTML = '<b>Zawód</b>: ' + resultJson.zawod;
            userFirma.innerHTML = '<b>Firma</b>: ' + resultJson.firma;

            //wypisujemy na strone
            document.body.appendChild(userImie);
            document.body.appendChild(userNazwisko);
            document.body.appendChild(userZawod);
            document.body.appendChild(userFirma);




         },
         onerror: function (msg) {
            console.log(msg);
         }
      });
   });
});

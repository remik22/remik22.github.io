$(function () {
   //pierwszy sposob
   $.ajax({
      url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
      dataType: 'json',
      success: function (resultJson) {
         //tworzymy zmienne
         console.log(resultJson);
         var pUserId = document.createElement('p');
         var pUserName = document.createElement('p');
         var pUserUrl = document.createElement('p');
         //pobieramy dane
         pUserId.innerHTML = 'User ID' + resultJson.userId;
         pUserName.innerHTML = 'User Name' + resultJson.userName;
         pUserUrl.innerHTML = 'User url://' + resultJson.userURL;
         //wypisujemy na strone
         document.body.appendChild(pUserId);
         document.body.appendChild(pUserName);
         document.body.appendChild(pUserUrl);


      },
      onerror: function (msg) {
         console.log(msg);
      }
   });
   //drugi sposob
   /*$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
      console.log(data);
   });*/


});

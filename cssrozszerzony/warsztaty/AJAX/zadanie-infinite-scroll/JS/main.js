$(function () {


   $(window).scroll(function () {
      /*if((window.innerHeight + window.scrollY) >= document.nody.offsetHeight)*/


      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
         $(function () {

            $.ajax({
               url: "https://jsonplaceholder.typicode.com/users",
               dataType: 'json',
               success: function (response) {
                  //tworzymy zmienne
                  //console.log(response);
                  var beginOfData = document.createElement('p');
                  var endOfData = document.createElement('p');

                  beginOfData.innerHTML = '<br>-------------BEGIN OF DATA------------<br><br>';
                  for (var i = 0; i < response.length; i++) {

                     /*albo -> response.forEach(function(element){
                     var username = document.createElement('p');
                     username.innerHTML = element.username;
                     document.body.appendChild(username);
                     tak jest dużo łatwiej!
                     
                     
                  })*/

                     var username = document.createElement('p');
                     var email = document.createElement('p');
                     var website = document.createElement('p');
                     var pusty = document.createElement('p');

                     username.innerHTML = "<b>User Name: </b>" + response[i].username;
                     email.innerHTML = "<b>Adress email: </b>" + response[i].email;
                     website.innerHTML = "<b>Website: </b>" + response[i].website;
                     pusty.innerHTML = '*******************';



                     document.body.appendChild(username);
                     document.body.appendChild(email);
                     document.body.appendChild(website);
                     document.body.appendChild(pusty);


                  }


                  endOfData.innerHTML = '<br>-------------END OF DATA------------<br><br>';


                  document.body.appendChild(beginOfData);
                  document.body.appendChild(endOfData);



                  /*pobieramy dane
                  pUserId.innerHTML = 'User ID' + response.id;
                  pUserName.innerHTML = 'User Name' + response.username;
                  pUserUrl.innerHTML = 'User url://' + response.website;
                  //wypisujemy na strone
                  document.body.appendChild(pUserId);
                  document.body.appendChild(pUserName);
                  document.body.appendChild(pUserUrl);*/


               },
               onerror: function (msg) {
                  console.log(msg);
               }
            });



         });
      }
   });

});

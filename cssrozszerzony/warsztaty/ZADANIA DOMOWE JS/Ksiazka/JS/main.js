/*class Book(tytul, autor, przeczytana) {
   this.tytul = tytul;
   this.autor = autor;
   this.przeczytana = przeczytana;
}
}
opiszKsiazke() {
   console.log("Książka ma tytuł " + this.tytul + ", jej autorem jest" + this.autor + " i została " + this.przeczytana);

}
}



var book1 = new Book("Aniołowie chaosu", "Graham Masterton", "NIE");


var book2 = new Book("Bazyliszek", "Graham Masterton", "NIE");

var book3 = new Book("Bezsenni", "Graham Masterton", "TAK");

var books = [book1, book2, book3]


book1.wyswietlInfo();
book2.wyswietlInfo();
book3.wyswietlInfo();
*/

class Ksiazka {
   constructor(tytul, autor, przeczytana) {

      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;


   };

   opiszKsiazke() {
      var text = "Ksiazka ma tytul " + this.tytul + "autorem jest" + this.autor + " i została";
      if (this.przeczytana) {
         text += "przeczytana";
      } else {
         text += "nieprzeczytana"
      }

      console.log(text);


   }


};

function iloscPrzeczytanych(ksiazki) {
   var przeczytaneKsiazki = 0;
   console.log('test');
   for (var i = 0; i < ksiazki.length; i++) {
      ksiazki[i].opiszKsiazke();

      if (ksiazki[i].przeczytana = true) {
         przeczytaneKsiazki++;
      }

   }
   return przeczytaneKsiazki;
}

var ksiazka1 = new Ksiazka('wiedzmin', "Sapkowski", true);
var ksiazka2 = new Ksiazka('Pan tadeusz', "Mickiewicz", true);
var ksiazka3 = new Ksiazka('50 twarzy greya', "szwed", false);

var tablica = [ksiazka1, ksiazka2, ksiazka3];



iloscPrzeczytanych(tablica);

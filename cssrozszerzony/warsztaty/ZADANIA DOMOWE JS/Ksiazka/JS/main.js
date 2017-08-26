class Book(tytul, autor, przeczytana) {
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

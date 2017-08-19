//'use strict';
//
//var wojtek = {
//    imie: "Wojtek",
//    wzrost: 181,
//    przedstawOsobe: function () {
//        console.log("Cześć jestem " + this.imie + " mam " + this.wzrost + " wzrostu.");
//    }
//
//}
//var kaja = {
//    imie: "Kaja",
//    wzrost: 160,
//    przedstawOsobe: function () {
//        console.log("Cześć jestem " + this.imie + " mam " + this.wzrost + " wzrostu.");
//    }
//
//}
//
//console.log(wojtek.imie);
//console.log(wojtek.wzrost);
//
////wojtek.imie = "Adam";
//
////console.log(osoba["imie"]);
////console.log(osoba["wzrost"]);
//
//wojtek.przedstawOsobe();
//
//console.log(kaja.imie);
//console.log(kaja.wzrost);
//
//kaja.przedstawOsobe();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;

    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" + "Nazwisko: " + this.nazwisko + "\n" + "Wzrost: " + this.wzrost + "\n" + "Oczy: " + this.oczy);
    }
}


var wojtek = new Osoba("Wojtek", "Potocki");

wojtek.wzrost = 180;
wojtek.oczy = "niebieskie";




//console.log(wojtek);

var karol = new Osoba("Karol", "Młodawski");
//console.log(karol);

wojtek.wyswietlInfo();
karol.wyswietlInfo();

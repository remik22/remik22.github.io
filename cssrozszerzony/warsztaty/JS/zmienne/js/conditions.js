'use strict';

var wzrostMateusz = 190;
var wzrosOlga = 190;

//war IF

if (wzrosOlga < wzrostMateusz) {
    console.log("Olga jest niższa");
}
//warunek if-else

if (wzrosOlga < wzrostMateusz) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga jest wyższa")
}
console.log("***********************************");
/*warunek if else if*/
if (wzrosOlga < wzrostMateusz) {
    console.log("Olga jest niższa");
} else if (wzrosOlga == wzrostMateusz) {
    console.log("olga taka wysoka jak Mateusz:");
} else {
    console.log("olga jest wyzsza");

}

var kolor = "zielony";
switch (kolor) {
    case "czerwony":
        console.log('kolor czerwony');
        break;
    case "zielony":
        console.log('kolor zielony');
        break;
    case "niebieski":
        console.log('kolor niebieski');
        break;
    case "zołty":
        console.log('kolor zołty');
        break;
    default:
        console.log("inny kolor");

}

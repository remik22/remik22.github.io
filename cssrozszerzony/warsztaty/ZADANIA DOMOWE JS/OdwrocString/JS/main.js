var nazwa = "akademia108";

function zmiana() {
   var tablicaNazwa = nazwa.split("");
   tablicaNazwa.sort();
   console.log(tablicaNazwa);
   var tablicaNowa = tablicaNazwa.join("");
   console.log(tablicaNowa);
}

zmiana();

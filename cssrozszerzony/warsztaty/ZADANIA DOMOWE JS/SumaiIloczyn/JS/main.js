function suma(x = 0) {


   for (i = 0; i < arguments.length; i++) {
      x += arguments[i];
      console.log(suma(1, 2, 3));
   }
}
//suma(1,2,3)

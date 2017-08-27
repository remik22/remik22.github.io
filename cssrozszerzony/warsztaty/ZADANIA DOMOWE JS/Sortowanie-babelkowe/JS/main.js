function bubbleSort(input) {

   var ile = input.length;

   do {
      for (var i = 0; i < ile - 1; i++) {
         if (input[i] > input[i + 1]) {
            var tymczasowa = input[i];
            input[i] = input[i + 1];
            input[i + 1] = tymczasowa;

         }


      }

      ile--;

   } while (ile > 1);

   return input;


}



var tabela = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78,
34, 1e2, 45, 67, 98, 1];

console.log('tablica: ' + tabela)
console.log('posortowana' + bubbleSort(tabela));

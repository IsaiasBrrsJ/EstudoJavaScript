/*
Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string
(segundo argumento). Retorne a string truncada com ... (reticências) ao final.
*/


function truncateString(str, num) {

  if(str.length > num){ // se a string passada for maior que o num, exempo str = isaias, num = 2; vai retornar so o is...;
   return str.substring(str, num)+'...';
  }

   return str.substring(str, num); // se a string for do tamanho exato ou acrescida 
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
truncateString("A-tisket a-tasket A green and yellow basket", 8) deve retornar a string A-tisket....
truncateString("Peter Piper picked a peck of pickled peppers", 11) deve retornar a string Peter Piper....
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) deve retornar a string A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) deve retornar a string A-tisket a-tasket A green and yellow basket.
truncateString("A-", 1) deve retornar a string A....
truncateString("Absolutely Longer", 2) deve retornar a string Ab....
*/

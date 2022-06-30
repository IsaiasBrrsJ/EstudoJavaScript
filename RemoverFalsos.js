/*
Remover todos os valores falsos de um array.

Valores falsos (falsy) em JavaScript são false, null, 0, "", undefined, e NaN.

Dica: tente converter cada valor para um booleano.
*/

function bouncer(arr) {
  let Array = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){ // como os valores falsos já estão predefinidos, então só vai entrar aqui caso seja verdade;
      Array.push(arr[i]); 
    }
  }
  return Array;
}
bouncer([7, "ate", "", false, 9]);


/*
bouncer([7, "ate", "", false, 9]) deve retornar [7, "ate", 9].
bouncer(["a", "b", "c"]) deve retornar ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) deve retornar [].
bouncer([null, NaN, 1, 2, undefined]) deve retornar [1, 2].
*/

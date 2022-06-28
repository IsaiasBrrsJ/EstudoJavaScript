/*
Você está recebendo dois arrays e um índice.

Copie cada elemento da primeira matriz para a segunda matriz, em ordem.

Comece inserindo elementos no índice n do segundo array.

Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos após a função ser executada.


*/

function frankenSplice(arr1, arr2, n) {

  let caractereArr2 = arr2.slice(0, n);// vai salvar em caractereArr2 comecando da posicao zero até o posicao N
   let retornar = [...caractereArr2, ...arr1, ...arr2.slice(n)];// ...caractereArr2 retorna as posicoes capturadas pelo slice, ...arr1 retorna todo o array1, ...arr2.slice(n) vai pegar todas as posicoes depois do valor especificado em n;

  return retornar;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*

frankenSplice([1, 2, 3], [4, 5], 1) deve retornar [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) deve retornar ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) deve retornar ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Todos os elementos do primeiro array devem ser adicionados no segundo array em suas ordens originais. frankenSplice([1, 2, 3, 4], [], 0) deve retornar [1, 2, 3, 4].
O primeiro array deve permanecer o mesmo após a função ser executada.
O segundo array deve permanecer o mesmo após a função ser executada.
*/

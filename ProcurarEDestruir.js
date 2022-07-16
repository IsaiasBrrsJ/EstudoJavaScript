/*
Você receberá um array inicial (o primeiro argumento na função destroyer), seguido por um ou mais argumentos. Remova todos os elementos da matriz inicial que são do mesmo valor que esses argumentos.

Observação: você tem que usar os arguments do objeto.
*/

function destroyer(arr, ...args) {
   let newArr = [];
  
  for(let i = 0; i < arr.length; i++){
      let igual = false;
      for(let j = 0; j < args.length; j++){
          if(arr[i] === args[j]){
              igual = true;
              continue;
          }
      }
      if(igual == false){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) deve retornar [1, 1].
Aprovado:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) deve retornar [1, 5, 1].
Aprovado:destroyer([3, 5, 1, 2, 2], 2, 3, 5) deve retornar [1].
Aprovado:destroyer([2, 3, 2, 3], 2, 3) deve retornar [].
Aprovado:destroyer(["tree", "hamburger", 53], "tree", 53) deve retornar ["hamburger"].
Aprovado:destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") deve retornar [12,92,65].
*/




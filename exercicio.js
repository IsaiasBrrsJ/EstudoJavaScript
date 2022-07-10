/*
Usar as funções de ordem superior map, filter ou reduce para solucionar um problema complexo
Agora que você já realizou alguns desafios usando funções de ordem superior como map(), filter() e reduce(), você pode usá-las para resolver um desafio mais complexo.

Complete o código para a função squareList usando qualquer combinação de map(), filter() e reduce(). A função deve retornar uma nova matriz contendo apenas os inteiros positivos (números decimais não são inteiros) elevados ao quadrado quando uma matriz de números reais é passada para ela. Um exemplo de array de números reais é [-3, 4.8, 5, 3, -3.2].

Observação: você não deve usar os loops for ou while ou a função forEach() na sua função.
*/


const squareList = arr => {
  // Altere apenas o código abaixo desta linha
   return arr.filter(a => a >= 0 && Number.isInteger(a)).map(t => t * t);
  // Altere apenas o código acima desta linha
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
squareList deve ser uma função.
Aprovado:Loops for, whilee a função forEach não devem ser usados.
Aprovado:map, filter ou reduce deve ser usado.
Aprovado:A função deve retornar um array.
Aprovado:squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) deve retornar [16, 1764, 36].
Aprovado:squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) deve retornar [9, 100, 49].
*/

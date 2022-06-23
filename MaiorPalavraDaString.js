/*
Retornar o comprimento da palavra mais longa na frase fornecida.

Sua resposta deve ser um número.
*/

function findLongestWordLength(str) {
  let max = 0;
  let palavraSeparada = str.split(' ');

  for(let i = 0; i < palavraSeparada.length; i++){
    if(palavraSeparada[i].length > max){
      max = palavraSeparada[i].length;
    }
  }

  return max;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

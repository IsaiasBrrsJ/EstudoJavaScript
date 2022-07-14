/*
Somar todos os números em um intervalo
Vamos passar um array de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O menor número nem sempre chegará primeiro.

Por exemplo, sumAll([4,1]) deve retornar 10 porque a soma de todos os números entre 1 e 4 (ambos incluídos) é 10.
*/


function sumAll(arr) {
  
  var soma = 0;
  var arrN = [...arr]
  if(arrN[0] > arrN[1]){
    arrN.sort((a, b)=> a - b);
  }
  for (let i = arrN[0]; i <= arrN[1];  i++){
    soma += i;
  }
  return soma;
}

var a  = sumAll([4, 1]);

console.log(a)
/*

Aprovado:sumAll([1, 4]) deve ser um número.
Aprovado:sumAll([1, 4]) deve retornar 10.
Aprovado:sumAll([4, 1]) deve retornar 10.
Aprovado:sumAll([5, 10]) deve retornar 45.
Aprovado:sumAll([10, 5]) deve retornar 45.
*/


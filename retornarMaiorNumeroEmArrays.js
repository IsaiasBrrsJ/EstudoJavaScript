/*
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) deve retornar um array.

Aguardando:largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) deve retornar [27, 5, 39, 1001].

Aguardando:largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) deve retornar [9, 35, 97, 1000000].

Aguardando:largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) deve retornar [25, 48, 21, -3].
*/

const arr = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

function largestOfFour(arr) {

  let max = 0;
  let arrReturn = [];
  for(let i =0; i < arr.length; i++){ //inicia em 0 e só vai pro proximo elemento quando terminar toda a iteração de J
    max = -999; // defini como -999 pra poder considerar o maior numero negativo, deu certo pois quanto mais próximo do 0 o número negativo estiver, maior ele será
    for(let j = 0; j < arr.length; j++){ // 
      if(arr[i][j] > max){
        max = arr[i][j];
      }
     
    }
   arrReturn[i] = max; 
  }
return arrReturn; // vai retornar o novo array, apenas com os meiores numeros;
}

console.log(largestOfFour(arr));

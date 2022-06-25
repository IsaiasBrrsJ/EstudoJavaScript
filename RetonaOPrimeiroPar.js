/*
Crie uma função que olhe através do array arr e retorne o primeiro elemento dentro do array que passe pelo 'teste de verdade'
('truth test'). Isso significa que, dado um elemento x, o 'teste de verdade'
é verdadeiro se func(x) é true. Se nenhum elemento passa no test, retorna undefined.
*/

function findElement(arr, func) {

  let result = 0; // vai armazenar o resultado
  for(let i = 0; i < arr.length; i++){ // vai percorrer todo o array
    result = func(arr[i]); //vai passar pra func o conteudo das posições do array e armazenar na result caso seja true
    if(result === true){ 
      return arr[i]; // vai retornar o primeiro valor que seja  par e encerra o ciclo for;
    }
  }
  
  //return undefined; // pode colocar um retorno pra retornar undefined ou deixa sem nada que ele retorna tbm
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) deve retornar 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) deve retornar undefined.
*/

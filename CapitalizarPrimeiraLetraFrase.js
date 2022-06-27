/*
Capitalizar a primeira letra de cada palavra de uma frase
Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.

Para o propósito desse exercício, você também deve capitalizar as palavras conectoras como the e of.
*/


function titleCase(str) {
 let split = str.split(' ');// vai fatiar o texto em pedaços
  let arr = [...split]; // vai pegar todos os pedaços e jogar na variavel  arr; 
 for(let i = 0; i < arr.length; i++){
   arr[i] = [arr[i]].toString().toLowerCase(); // vai converter tudo pra minúscula
     let minuscula = [arr[i][0]].toString().toUpperCase();// vai pegar a primeira letra de cada frase e jogar pra maiuscula
      arr[i] = minuscula + arr[i].slice(1); // pegar o caractere convertido pra maiúsculo e concatenar com o restate da string
  }
  str = arr.join(" "); // remover as virgulas
  
  return str;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*
titleCase("I'm a little tea pot") deve retornar uma string.
titleCase("I'm a little tea pot") deve retornar a string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") deve retornar a string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") deve retornar a string Here Is My Handle Here Is My Spout.
*/

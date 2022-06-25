/*
Verifique se uma string (primeiro argumento, str) termina com a sequência de caracteres de destino fornecida (segundo argumento, target).

Este desafio pode ser resolvido com o método .endsWith(), que foi introduzido na ES2015. Para este desafio, entretanto, gostaríamos que você usasse um dos métodos de substring JavaScript.
*/


function confirmEnding(str, target) {

   let tamanho = target.length;
   let verificar = str.substring(str.length-tamanho);

  if(verificar === target){
    return true;
  }
  
  return false;
}

confirmEnding("Bastian", "n");



/*
confirmEnding("Bastian","n") deve retornar true.
confirmEnding("Congratulation","on") deve retornar true.
confirmEnding("Connor","n") deve retornar false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") deve retornar false.
confirmEnding("He has to give me a new name","name") deve retornar true.
confirmEnding("Open sesame","same") deve retornar true.
confirmEnding("Open sesame", "sage") deve retornar false.
confirmEnding("Open sesame","game") deve retornar false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") deve retornar false.
confirmEnding("Abstraction", "action") deve retornar true.
Seu código não deve usar o método integrado .endsWith() para resolver o desafio.
*/

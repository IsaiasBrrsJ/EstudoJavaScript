/*
Repetir uma string Repetir uma string
Repita uma string passada str (primeiro argumento), num vezes (segundo argumento). Retorne uma string vazia se num não for um número positivo. Para o propósito do desafio, Não use o método integrado .repeat().
*/

function repeatStringNumTimes(str, num) {
  let retorno = "";
  
    if(num > 0){
       for(let i =0; i < num; i++){
         retorno += str;
       }
      return retorno;
    }
  
  return retorno;
}

repeatStringNumTimes("abc", 3);

/*
repeatStringNumTimes("*", 3) deve retornar a string ***.
repeatStringNumTimes("abc", 3) deve retornar a string abcabcabc.
repeatStringNumTimes("abc", 4) deve retornar a abcabcabcabc.
repeatStringNumTimes("abc", 1) deve retornar a string abc.
repeatStringNumTimes("*", 8) deve retornar a ********.
repeatStringNumTimes("abc", -2) deve retornar uma string vazia ("").
O método integrado repeat() não deve ser usado.
repeatStringNumTimes("abc", 0) deve retornar "".
*/

/*
Verifique se um valor é classificado como booleano primitivo. Retorna true ou false.

Os booleanos primitivos são true e false.
*/

function booWho(bool) {
  switch(bool){

    case true:
    case false:
      return true;
    default:
      return false;
    
  }
}

booWho(null);

/*
booWho(true) deve retornar true.
booWho(false) deve retornar true.
booWho([1,2,3]) deve retornar false.
booWho([].slice) deve retornar false.
booWho({"a": 1}) deve retornar false.
booWho(1) deve retornar false.
booWho(NaN) deve retornar false.
booWho("a") deve retornar false.
booWho("true") deve retornar false.
booWho("false") deve retornar false.
*/

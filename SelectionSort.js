var array=[5,4,3,2,1, 0.5];

function selectionSort(array) {
  // Altere apenas o código abaixo desta linha
  for(var i = 0; i < array.length; i++){
   for(var j = i+1; j < array.length; j++){
      if(array[i] > array[j]){
        [array[i], array[j]] = [array[j], array[i]];
       
      } 
    }
  }
  return array;
  // Altere apenas o código acima desta linha
}
console.log(selectionSort(array));

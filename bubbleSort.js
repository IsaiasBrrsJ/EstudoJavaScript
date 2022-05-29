var array=[5,4,3,2,1];

function bubbleSort(array){
 for(var i = 0; i < array.length; i++){
   for(var j = i+1; j < array.length; j++){
      if(array[i] > array[j]){
        [array[i], array[j]] = [array[j], array[i]];
       
      } 
    }
  }
  return array;
}
console.log(bubbleSort(array));

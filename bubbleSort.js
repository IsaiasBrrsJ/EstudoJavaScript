var array=[5,4,3,2,1];

function bubbleSort(ar){
 for(var i = 0; i < ar.length; i++){
   for(var j = i+1; j < ar.length; j++){
      if(ar[i] > ar[j]){
        [ar[i], ar[j]] = [ar[j], ar[i]];
       
      } 
    }
  }
  return ar;
}
console.log(bubbleSort(array));

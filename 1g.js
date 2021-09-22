function removeDuplicates(array) {
  result = [];
   map = {};

  for (let i = 0; i <array.length; i++) {
    
      map[array[i]]=true; 
  }
  result=Object.keys(map);
  console.log(result);
}
ar=[1,2,2,3,3,4,5];
removeDuplicates(ar);

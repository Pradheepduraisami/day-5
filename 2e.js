Let  fun=(ar)=>{
  
  for(i=0;i<ar.length;i++)
  {n=ar[i];t=0;console.log();
   while(n>0){ 
   t=parseInt(t*10)+parseInt(n%10);
     n=parseInt(n/10);
    
   }
  if(t==ar[i]){console.log(ar[i]);
  }
  }} 
ar=[232,141,456,789,909];
fun(ar);


let  fun=(ar)=>{
  
  for(i=0;i<ar.length;i++)
  {flag=0;
                           if(ar[i]==1)flag=1;
    
       for(j=2;j<=ar[i]/2;j++)
           {
            if(ar[i]%j===0){flag=1;}
          }
   if(flag==0){console.log(ar[i]);
              }
  }
  
 }
ar=[1,2,3,4,5,6,7,8,9,10,11,12,13];
fun(ar);

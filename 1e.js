function fun(ar){
  
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
F)function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
      
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log((m1 + m2)/2);
}
 

var ar1 = [1,2,7,9,11];
var ar2 = [2,9,15,17,21];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    getMedian(ar1, ar2, n1);

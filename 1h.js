function rotateArray(a,n) {
  for(let i=0;i<n;i++){
    temp=a[0];
    for(let j=0;j<a.length;j++){
      a[j]=a[j+1]
    }
    a[a.length-1]=temp
  }
  console.log(a);
}
ar=[1,2,3,4,5];
n=3;
rotateArray(ar,n);

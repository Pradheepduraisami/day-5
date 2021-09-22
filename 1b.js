function fun(str){
  str=str.split(" ");
  for(i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
console.log(str.join(" "));
}
str="Hi! I am pradheep";
fun(str);

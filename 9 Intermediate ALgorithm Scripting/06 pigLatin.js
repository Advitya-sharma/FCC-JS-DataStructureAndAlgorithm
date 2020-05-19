let flag = 1;
function translatePigLatin(str) {
  var s = str.split("");
  if(!(s.includes("a")||s.includes("e")||s.includes("i")||s.includes("o")||s.includes("u"))){
    console.log(str);
    return str+"ay";
    }
else if(["a","e","i","o","u"].includes(str[0])){

console.log(flag);
if(flag === 0){  
     return str+"ay";
}
else{
  console.log(str);
  return str+"way";
  }
}
else{
  flag = 0;
  return translatePigLatin(str.slice(1,str.length)+str.slice(0,1));
} 
  }

translatePigLatin("algorithm");

function rot13(str) {

    return str.split("")
    .map(x=> x.charCodeAt())
    .map(x=>{
    if(x>=65 && x<= 77)
      return x+13;
    else if(x>77 && x<=90)
      return x-13;
    else
      return x;
      }).map(x => String.fromCharCode(x))
    .join("");
  }
  
  rot13("SERR PBQR PNZC");
  
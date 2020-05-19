function fearNotLetter(str) {
    var start = str[0].charCodeAt();
    var end = str[str.length-1].charCodeAt();
    for(var i=0;i<str.length;i++){
      if(str[i].charCodeAt() != start){
        console.log(start)
        return String.fromCharCode(start);
      }
      start++;
    }
    return undefined;
  }
  
  fearNotLetter("abce");
  
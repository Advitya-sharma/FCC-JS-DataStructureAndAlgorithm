function findLongestWordLength(str) {
    str = str.split(" ");
    for(var i=0;i<str.length;i++){
      str[i] = str[i].length;
    }
    return Math.max(...str);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
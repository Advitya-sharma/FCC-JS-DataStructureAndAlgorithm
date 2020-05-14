function titleCase(str) {

    str = str.split(" ");
    for(var i=0;i<str.length;i++){
      str[i] = str[i].toLowerCase();
      str[i] = str[i][0].toUpperCase()+str[i].slice(1,str[i].length);
    }
  
    return str.join(" ");
  }
  
  titleCase("I'm a little tea pot");
  
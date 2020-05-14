function truncateString(str, num) {

    if(num<str.length){
    str = str.slice(0,num);
    str = str+"...";
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
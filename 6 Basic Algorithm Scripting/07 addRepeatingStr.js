function repeatStringNumTimes(str, num) {
    let s="";
      if(num>0){
        for(var i=1;i<=num;i++){
          s+=str;
        }
        return s;
      }
      else
      {
        return "";
      }
      
    }
    
    repeatStringNumTimes("abc", 3);
    
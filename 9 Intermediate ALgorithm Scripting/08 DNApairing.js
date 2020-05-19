function pairElement(str) {
    var res=[];
    for(var i=0;i<str.length;i++){
      switch(str[i]){
        case 'A':
          res.push(["A","T"]);
          break;
        case 'T':
          res.push(["T","A"]);
          break;
        case 'C':
          res.push(["C","G"]);
          break;
        case 'G':
          res.push(["G","C"]);
          break;
      }
    }
    console.log(res)
    return res;
  }
  
  pairElement("GCG");
  
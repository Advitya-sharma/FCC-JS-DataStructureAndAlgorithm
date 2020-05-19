function addTogether(a,b) {

    if(typeof(a) == "number"){
      if(!b){
        return function(x){
      if(Number.isInteger(x)){
          return a+x;
          }
          else{
          return undefined;  
          }
    };
      }
      else{
        if(Number.isInteger(b)){
          return a+b;
        }
        else{
          return undefined;
        }
        }
      }
      else{
        return undefined;
      }
    }
    
    
    
    addTogether(2, 3);
    
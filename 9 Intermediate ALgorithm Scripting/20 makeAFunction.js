var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var str = firstAndLast;
  
    this.getFullName = function() {
      return str;
    };
    this.getFirstName = function(){
      return str.split(" ")[0];
    };
    
    this.setFirstName =function(first){
      str = str.split(" ");
      str[0] = first;
      str = str.join(" ");
      //console.log(str);
    } 
  
  this.setLastName =function(last){
      str = str.split(" ");
      str[1] = last;
      str = str.join(" ");
      //console.log(str);
    }
  this.setFullName = function(full){
    str = full;
  }
  this.getLastName = function(){
      return str.split(" ")[1];
    };
  
    return firstAndLast;
  };
  var bob = new Person('Bob Ross');
  
  
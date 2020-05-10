// Only change code below this line
function countdown(n){
    var arr = [];
  
    if(n < 1)
    return [];
  
    arr = countdown(n-1);
    arr.unshift(n);
  
    return arr;
  
  }
  // Only change code above this line
  
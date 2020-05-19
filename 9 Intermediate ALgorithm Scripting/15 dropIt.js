function dropElements(arr, func) {
    var len = arr.length;
    for(var i=0;i<len;i++){
      console.log(arr[0]);
      if(func(arr[0])){
        return arr;
      }
      else{
        arr.shift();
      }
    }
    console.log(arr);
    return arr;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})
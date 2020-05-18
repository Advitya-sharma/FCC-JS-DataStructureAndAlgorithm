function chunkArrayInGroups(arr, size) {
    var ar = arr;
    var newArr = [];
    while(ar.length != 0){
      newArr.push(ar.splice(0,size));
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
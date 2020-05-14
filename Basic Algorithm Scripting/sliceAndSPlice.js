function frankenSplice(arr1, arr2, n) {
    var arrx= [...arr2.slice(0,n)];
    var arry = [...arr1];
    arr2.splice(0,n);
    return [...arrx,...arry,...arr2];
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
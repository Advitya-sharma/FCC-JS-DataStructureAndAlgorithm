function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var numobj = arr.length;
    for(var i=0;i<numobj;i++){
      var alt = arr[i].avgAlt;
      var sum = Math.round((2*Math.PI)*(Math.sqrt((Math.pow((earthRadius + alt),3))/ GM)));
      console.log(sum);
      delete arr[i].avgAlt;
      arr[i]['orbitalPeriod'] = sum;
    }
    console.log(arr);
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  
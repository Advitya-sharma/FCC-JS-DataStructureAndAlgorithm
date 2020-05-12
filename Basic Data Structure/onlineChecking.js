function countOnline(usersObj) {
    // Only change code below this line
    var count = 0;
    for(let onx in usersObj){
      if(usersObj[onx].online === true){
        count++;
      }
    }
    return count;
    // Only change code above this line
  }
  
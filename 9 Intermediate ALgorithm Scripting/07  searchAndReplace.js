function myReplace(str, before, after) {

  if(before[0].toUpperCase() == before[0]){

    var aft = after[0].toUpperCase() + after.slice(1);
    return str.replace(before,aft);

  }
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

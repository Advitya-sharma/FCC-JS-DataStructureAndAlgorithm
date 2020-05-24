var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  var a = [...arr];
  return a.sort();
  // Only change code above this line
}
nonMutatingSort(globalArray);

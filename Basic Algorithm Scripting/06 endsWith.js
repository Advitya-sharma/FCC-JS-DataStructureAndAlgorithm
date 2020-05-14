function confirmEnding(str, target) {
    let re = RegExp(target+"$","i");
    return re.test(str);
  }
  
  confirmEnding("Bastian", "n");
  
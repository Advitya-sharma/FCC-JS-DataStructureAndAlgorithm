function convertToRoman(num) {
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
      ];
    
    var str = "";
  
    for (var index = 0; index < value.length; index++) {
      while (value[index] <= num) {
        str += romanNum[index];
        num -= value[index];
      }
    }
  
    return str;
  }
  
  convertToRoman(36);
  
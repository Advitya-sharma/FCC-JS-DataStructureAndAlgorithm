function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");

  if(str.split("").reverse().join("") == str)
  return true;
  else
  return false;
}

palindrome("eye");

/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str2 = "";

  //Removing spaces and special characters
  for (i = 0; i < str.length; i++) {
    if (/^[a-z]/i.test(str[i])) {
      str2 += str[i];
    }
  }
  //Obtaining the reverse of string in bruteforce approach
  let rev = "";
  for (i = str2.length - 1; i >= 0; i--) {
    rev += str2[i];
  }

  //validating
  return rev === str2;
}

module.exports = isPalindrome;

//Solved

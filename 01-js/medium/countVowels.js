/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let c = 0;
  const arr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i].toLowerCase())) {
      c++;
    }
  }
  return c;
}

module.exports = countVowels;

//Solved

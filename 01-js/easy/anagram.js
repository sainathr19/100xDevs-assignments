/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    return false;
  }
  let hash1 = {};
  for (let i = 0; i < str1.length; i++) {
    if (hash1[str1[i]] === undefined) {
      hash1[str1[i]] = 1;
    } else {
      hash1[str1[i]]++;
    }
  }
  // let hash2={};
  for (let i = 0; i < str2.length; i++) {
    if (hash1[str2[i]] === undefined || hash1[str2[i]] === 0) {
      return false;
    } else {
      hash1[str2[i]]--;
    }
  }
  return true;
}

module.exports = isAnagram;

//Solved

// Question: https://namastedev.com/practice/count-vowels

function isVowel(char) {
  let vowels = "aAeEiIoOuU";
  return vowels.includes(char);
}

function countVowels(str) {
  // Your implementation
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  return count;
}

//For the purpose of user debugging.
countVowels("");

module.exports = countVowels;

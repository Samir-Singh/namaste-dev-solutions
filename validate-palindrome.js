// Question: https://namastedev.com/practice/validate-palindrome

/*
    Notes: 
        Here we are using two pointer approach from left and right side.
        1. If the str[i] and str[j] is alphanumeric than check if it is not equal than return false else increase from left and decrease from right.
        2. If the str[i] and str[j] is not alphanumeric than check which one is not left one or right one than according to that increase or decrease from left or right respectively.
*/

function validatePalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    let leftChar = str[i].toLowerCase();
    let rightChar = str[j].toLowerCase();

    const isLeftAlphaNum =
      (leftChar >= "a" && leftChar <= "z") ||
      (leftChar >= "0" && leftChar <= "9");
    const isRightAlphaNum =
      (rightChar >= "a" && rightChar <= "z") ||
      (rightChar >= "0" && rightChar <= "9");

    if (isLeftAlphaNum && isRightAlphaNum) {
      if (leftChar !== rightChar) return false;
      i++;
      j--;
    } else {
      if (!isLeftAlphaNum) i++;
      if (!isRightAlphaNum) j--;
    }
  }

  return true;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome;

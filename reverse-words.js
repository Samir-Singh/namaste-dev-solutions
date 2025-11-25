// Question : https://namastedev.com/practice/reversewords

// There is no direct method to reverse the string in javascript like in array we can simply do arr.reverse() so for that we have to first convert string into array using split('') method

function reverseWords(sentence) {
  // Your implementation
  return sentence
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}

//For the purpose of user debugging.
reverseWords("  Lead  and Trail  ");

module.exports = reverseWords;

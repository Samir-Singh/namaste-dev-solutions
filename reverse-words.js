// Question : https://namastedev.com/practice/reversewords

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

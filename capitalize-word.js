// Question : https://namastedev.com/practice/capitalize-words

/* 
    Notes
    item.chartAt(index) : returns the character at particular index
    item.slice(index) : return the remaining character on the right side of the string including index also
*/

// Approach 1
function capitalizeWords(sentence) {
  // Your implementation

  if (sentence === "") return sentence;

  const sentenceArray = sentence.toLowerCase().trim().split(/\s+/);
  for (let i = 0; i < sentenceArray.length; i++) {
    let value = sentenceArray[i].split("");
    value[0] = value[0].toUpperCase();
    value = value.join("");
    sentenceArray[i] = value;
  }

  return sentenceArray.join(" ");
}

//For the purpose of user debugging.
capitalizeWords("   javascript is   FUN");
module.exports = capitalizeWords;

// Approach 2
function capitalizeWords(sentence) {
  // Your implementation
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords;

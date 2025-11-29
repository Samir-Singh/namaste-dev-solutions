// Question: https://namastedev.com/practice/loop-a-to-z

/*
    Notes:
        String.fromCharCode(97) = a
        String.fromCharCode(97,98) = ab
        String.fromCharCode(65) = A
        'a'.charCodeAt(0) = 97
        'A'.charCodeAt(0) = 65
        'abc'.charAt(1) = b
*/

function generateAtoZ() {
  // your solution here
  let ans = [];
  for (let i = 65; i < 65 + 24; i++) {
    ans.push(String.fromCharCode(i));
  }
  return ans;
}

module.exports = { generateAtoZ };

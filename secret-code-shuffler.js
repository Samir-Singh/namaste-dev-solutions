// Question: https://namastedev.com/practice/secret-code-shuffler

/*
    Notes:
        String.fromCharCode(97) = a
        String.fromCharCode(97,98) = ab
        String.fromCharCode(65) = A
        'a'.charCodeAt(0) = 97
        'A'.charCodeAt(0) = 65
        'abc'.charAt(1) = b
*/

function decodeSecretCode(s) {
  // your solution
  if (!s || s.length % 2 !== 0 || s.length === 0) return "";

  let ans = "";
  for (let i = 0; i < s.length; i += 2) {
    ans += String.fromCharCode(Number(s[i].charCodeAt(0)) + Number(s[i + 1]));
  }
  return ans;
}

module.exports = { decodeSecretCode };

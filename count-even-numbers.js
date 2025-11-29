// Question: https://namastedev.com/practice/count-even-numbers
/* 
    Notes:
    isFinite(value) function is used to check if the value is finite it first converts it value to a number than if conversion result is a finite number it returns true else false.
    finite numbers are (123, -1.23, 0, null, '', '123'). It converts null to 0 and 0 is finite number empty string is also converted into 0.
    non-finite numbers are (Infinity, -Infinity, NaN, 'Hello')
*/

function countEvens(arr) {
  // your solution here
  let count = 0;
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      if (typeof arr[i] === "number" && arr[i] % 2 === 0) count++;
    } else {
      return false;
    }
  }
  return count;
}

module.exports = { countEvens };

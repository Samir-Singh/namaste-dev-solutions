// Question: https://namastedev.com/practice/find-smallest-number
// the combination of both ( typeof item !== 'number and Number.isNaN(item) ) will check the valid numeric value because the typeof NaN is also a number

function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  if (arr.some((item) => typeof item !== "number" || Number.isNaN(item))) {
    return false;
  }

  return Math.min(...arr);
}

module.exports = { findSmallest };

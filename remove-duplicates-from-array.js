// Question: https://namastedev.com/practice/remove-duplicates-from-array
// new Set(array) is used to remove duplicates from an array

function removeDuplicates(arr) {
  // your code here
  let ans = [...new Set(arr)];

  return ans;
}
removeDuplicates([true, false, true]);
module.exports = removeDuplicates;

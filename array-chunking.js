// Question : https://namastedev.com/practice/array-chunking

// Approach 1
function chunkArray(arr, n) {
  // Your implementation
  let ans = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);

    if (tempArr.length === n) {
      ans.push(tempArr);
      tempArr = [];
    }
  }

  if (tempArr.length > 0) {
    ans.push(tempArr);
  }

  return ans;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray;

//Approach 2
function chunkArray(arr, n) {
  // Your implementation
  let ans = [];
  for (let i = 0; i < arr.length; i += n) {
    ans.push(arr.slice(i, i + n));
  }
  return ans;
}

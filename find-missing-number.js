// Question: https://namastedev.com/practice/find-missing-number

/*
    Notes:
    Formula: n*(n+1)/2  gives you the expected sum of 0 to n.
    expectedSum - actualSum gives us the missing number in positive integers
*/

function findMissingNumber(nums) {
  // Your implementation
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, curr) => acc + curr);

  return expectedSum - actualSum;
}

//For the purpose of user debugging.
findMissingNumber([0]);

module.exports = findMissingNumber;

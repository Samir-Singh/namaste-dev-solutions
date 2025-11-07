// Question : https://namastedev.com/practice/flatten-nested-array

// Recursive Approach : In this approach we are iterating over an array and check if it is array or not if it is an array than again call the same function by passing that array, if it is not than just push that single element into the ans.
function flattenArray(arr) {
  // Your implementation
  let ans = [];

  const handleFlatArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        handleFlatArray(arr[i]);
      } else {
        ans.push(arr[i]);
      }
    }
  };

  handleFlatArray(arr);

  return ans;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray;

// Iterative Approach : In this approach we are popped out the last element from the array and check if it is an array or not if it is an array than push inside the stack by spreading it, if not than simply push into ans array do this process until stack is not empty
function flattenArray(arr) {
  // Your implementation

  let stack = [...arr];
  let ans = [];
  while (stack.length) {
    let pop = stack.pop();
    if (Array.isArray(pop)) {
      stack.push(...pop);
    } else {
      ans.push(pop);
    }
  }

  return ans.reverse();

  return ans;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray;

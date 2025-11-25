// Given an array we have to rotate the array to the right and left both by k steps, where k is non-negative.

let arr = [1, 2, 3, 4, 5, 6];

// 1 - 612345 - 234561
// 2 - 561234 - 345612
// 3 - 456123 - 456123
// 4 - 345612 - 561234
// 5 - 234561 - 612345
// 6 - 123456 - 123456
// 7 - 612345 - 234561

function rotateArray(arr, k) {
  let obj = {
    steps: k,
    clockwise: [],
    anticlockwise: [],
  };

  k = k % arr.length;

  obj.clockwise.push(
    ...arr.slice(arr.length - k),
    ...arr.slice(0, arr.length - k)
  );
  obj.anticlockwise.push(...arr.slice(k), ...arr.slice(0, k));

  return obj;
}

console.log(rotateArray(arr, 1));
console.log(rotateArray(arr, 2));
console.log(rotateArray(arr, 3));
console.log(rotateArray(arr, 4));
console.log(rotateArray(arr, 5));
console.log(rotateArray(arr, 6));
console.log(rotateArray(arr, 7));

// Question : https://namastedev.com/practice/groupbyarr-key

function groupBy(arr, key) {
  // Your implementation
  let result = {};
  for (let item of arr) {
    if (item[key] in result) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = [item];
    }
  }

  return result;
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
module.exports = groupBy;

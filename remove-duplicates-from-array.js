// Question: https://namastedev.com/practice/remove-duplicates-from-array
// new Set(array) is used to remove duplicates from an array ... because set is a best data structure to store unique elements as compare to object because in object there is key collision issue but in set there is no key collision issue.
// Inside Set for non-primitive values like object, array it compare it's reference and not primitive values like number, string, boolean it compare it's value

const arr = [
  { 1: true },
  { 1: true },
  { 1: false },
  [1, 2, 3],
  [1, 2, 3],
  1,
  1,
  "1",
];

// For this arr we have to store key in string formate by applying JSON.stringify(key) and if key is string than in set it set as string and if key is number than it will be set as number that is the d/b set and object

function removeDuplicates(arr) {
  // your code here
  let set = new Set();
  let ans = [];

  for (let item of arr) {
    if (!set.has(item)) {
      set.add(item);
      ans.push(item);
    }
  }

  return ans;
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
module.exports = removeDuplicates;

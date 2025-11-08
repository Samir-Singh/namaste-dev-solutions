/*

    Notes:
    1. By default arr.sort method uses timsort algorithm internally whose time complexity is O(n logn) for worst case and O(n) for nearly sorted array.
    2. Timsort algorithm is the combination of merge sort + insertion sort.
    3. sort() method takes compare function optionally as a callback (a,b)=>a-b which return -1 / 0 / 1. If the return value is less than or equal to 0 than no change in digits if greater than zero i.e. positive than swap the digits.
    4. By default sort method sorts the values in lexicographic form ( dictionary form ) internally it first converts the all values inside the array in string formate temporary than apply the sorting method in the values.
    5. To sort the numbers we must have to use compare function (a,b)=>a-b. Otherwise [100,10,2] will give you the o/p [10,100,2].
    6. arr.sort() mutates the original array but arr.toSorted() doesn't mutate the original array.

*/

Array.prototype.mySort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};

function customSort(arr) {
  //write your implementation here
  let tempStringArr = [];
  let tempNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      tempStringArr.push(arr[i]);
    } else {
      tempNumArr.push(arr[i]);
    }
  }

  tempStringArr.mySort();
  tempNumArr.mySort();

  return [...tempStringArr, ...tempNumArr];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;

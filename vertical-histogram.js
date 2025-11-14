/* 
Given an array containing numbers we have to print vertical start pattern on the basis of numbers given inside the array
ex: arr = [2,3,5,8,0,6,2]

   *
   *
   * *
  ** *
  ** *
 *** *
**** **
**** **

*/

const arr = [2, 3, 5, 8, 0, 6, 2];

const row = Math.max(...arr);
const col = arr.length;

let ans = "";

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (row - arr[j] <= i) {
      ans += "*";
    } else {
      ans += " ";
    }
  }
  ans += "\n";
}

console.log(ans);

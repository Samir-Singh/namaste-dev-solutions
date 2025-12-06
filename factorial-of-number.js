// Approach 1 : Iterative approach
function factorial(n) {
  // your solution here
  let ans = 1;
  for (let i = n; i >= 1; i--) {
    ans *= i;
  }
  return ans;
}

module.exports = { factorial };

// Approach 2 : Recursive Approach
function factorial(n) {
  // your solution here
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

module.exports = { factorial };

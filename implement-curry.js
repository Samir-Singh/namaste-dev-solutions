// Question: https://namastedev.com/practice/implement-curry

function curry(fn) {
  // Your implementation
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

//For the purpose of user debugging.
//pass appropriate input in below function call
curry();
module.exports = curry;

// Question: https://namastedev.com/practice/arrayprototypereduce

// In Array.prototype.reduce function if first value is undefined than it takes the second value as initial value if second is undefined than it takes third as initial and so on

Array.prototype.myReduce = function (cb, initialValue) {
  // Your implementation
  if (typeof cb !== "function")
    throw new TypeError("Please provide valid callback function");

  if (!Array.isArray(this))
    throw new TypeError("Reduce should iterate on array only");

  let acc;
  let i = 0;

  if (initialValue === undefined) {
    while (i < this.length) {
      if (this[i] !== undefined) {
        acc = this[i];
        i++;
        break;
      }
      i++;
    }

    if (acc === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  } else {
    acc = initialValue;
  }

  for (; i < this.length; i++) {
    if (this[i] !== undefined) {
      acc = cb(acc, this[i], i, this);
    }
  }

  return acc;
};

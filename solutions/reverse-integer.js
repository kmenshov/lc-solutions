exports.prompts = [
  ['Provide the integer: ', parseInt],
];

// Math is slooooooooooooow!
exports.main = (x) => {
  let result = 0;
  let source = x < 0 ? -x : x; // Math.abs(x);
  const threshold = 214748364; // Math.floor(2 ** 31 / 10)

  while (source > 0) {
    if (result > threshold) return 0; // overflow
    result = result * 10 + (source % 10);
    // eslint-disable-next-line no-bitwise
    source = source / 10 | 0; // fast convert to integer (within 32 bits)
  }

  return x < 0 ? -result : result;
};

exports.alternative = (x) => {
  // Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
  const threshold = x < 0 ? '2147483648' : '2147483647';
  // Compare as strings:
  const isMore = (a, b) => {
    if (a.length > b.length) return true;
    if (b.length > a.length) return false;
    return a > b;
  };

  const revString = Math.abs(x).toString().split('').reverse().join('').replace(/^0+/, '');
  if (isMore(revString, threshold)) return 0;
  return parseInt(revString || 0, 10) * Math.sign(x);
};

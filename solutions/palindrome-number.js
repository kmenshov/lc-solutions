/* eslint-disable no-bitwise, no-param-reassign */
exports.prompts = [
  ['Provide an integer: ', parseInt],
];

exports.main = (x) => {
  if (x < 0) return false;

  const strX = x.toString().split('');
  const len = (strX.length / 2) | 0;

  for (let i = 0; i < len; i++) if (strX[i] !== strX[strX.length - 1 - i]) return false;

  return true;
};

exports.alternative = (x) => {
  if (x < 0) return false;

  let len = (Math.log10(x) | 0);
  while (len > 0) {
    const firstDigit = (x / 10 ** len) | 0;
    x -= (firstDigit * 10 ** len);

    const lastDigit = x % 10;
    if (lastDigit !== firstDigit) return false;

    x = (x / 10) | 0;
    len -= 2;
  }

  return true;
};

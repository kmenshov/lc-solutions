/* eslint-disable no-multi-spaces, no-bitwise, no-mixed-operators */
exports.prompts = [
  ['Provide an integer: ', parseInt],
];

exports.main = (num) => {
  const ones      = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens      = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hundreds  = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const thousands = ['', 'M', 'MM', 'MMM'];

  return thousands[(num / 1000) | 0] +
         hundreds[(num % 1000 / 100) | 0] +
         tens[(num % 100 / 10) | 0] +
         ones[num % 10];
};

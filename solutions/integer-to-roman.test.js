const itr = require('./integer-to-roman').main;

test('converts an integer to a roman number', () => {
  expect(itr(3)).toBe('III');
  expect(itr(27)).toBe('XXVII');
  expect(itr(4)).toBe('IV');
  expect(itr(9)).toBe('IX');
  expect(itr(58)).toBe('LVIII');
  expect(itr(1994)).toBe('MCMXCIV');
});

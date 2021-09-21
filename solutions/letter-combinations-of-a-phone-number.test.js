const lc = require('./letter-combinations-of-a-phone-number').main;

test('returns all combinations of phone letters', () => {
  expect(lc('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  expect(lc('2')).toEqual(['a', 'b', 'c']);
  expect(lc('')).toEqual([]);
});

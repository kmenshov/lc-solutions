const ts = require('./two-sum').main;

test('finds the indices of elements which sums to the target', () => {
  expect(ts([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(ts([3, 2, 4], 6)).toEqual([1, 2]);
  expect(ts([3, 3], 6)).toEqual([0, 1]);
});

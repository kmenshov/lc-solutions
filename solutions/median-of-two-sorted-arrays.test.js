const mtsa = require('./median-of-two-sorted-arrays').main;

test('finds the median of two sorted arrays', () => {
  expect(mtsa([1, 3], [2])).toBe(2);
  expect(mtsa([1, 2], [3, 4])).toBe(2.5);
  expect(mtsa([0, 0], [0, 0])).toBe(0);
  expect(mtsa([], [1])).toBe(1);
  expect(mtsa([2], [])).toBe(2);
  expect(mtsa([1, 3], [2, 7])).toBe(2.5);
});

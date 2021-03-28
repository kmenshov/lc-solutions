const ts = require('./three-sum').main;

test('finds the elements which sums to zero', () => {
  expect(ts([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  expect(ts([])).toEqual([]);
  expect(ts([0])).toEqual([]);
  expect(ts([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual(
    [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  );
});

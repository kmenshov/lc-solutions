const atn = require('./add-two-numbers').main;

test('adds reversed numbers', () => {
  expect(atn(
    { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    { val: 5, next: { val: 6, next: { val: 4, next: null } } },
  )).toEqual(
    { val: 7, next: { val: 0, next: { val: 8, next: null } } },
  );

  expect(atn(
    { val: 0, next: null },
    { val: 0, next: null },
  )).toEqual(
    { val: 0, next: null },
  );

  expect(atn(
    // eslint-disable-next-line max-len
    { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } } } } },
    { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } },
  )).toEqual(
    // eslint-disable-next-line max-len
    { val: 8, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } },
  );
});

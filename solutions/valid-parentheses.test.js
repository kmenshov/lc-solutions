const vp = require('./valid-parentheses').main;

test('determines if a sequence of parentheses is valid', () => {
  expect(vp('()')).toBe(true);
  expect(vp('()[]{}')).toBe(true);
  expect(vp('(]')).toBe(false);
  expect(vp('([)]')).toBe(false);
  expect(vp('{[]}')).toBe(true);
  expect(vp('[')).toBe(false);
});

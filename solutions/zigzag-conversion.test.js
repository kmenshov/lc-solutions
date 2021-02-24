const zc = require('./zigzag-conversion').main;

test('converts a string into a zig-zag', () => {
  expect(zc('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  expect(zc('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  expect(zc('A', 1)).toBe('A');
});

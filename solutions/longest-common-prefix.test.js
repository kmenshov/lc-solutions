const lcp = require('./longest-common-prefix').main;

test('finds the longest common prefix', () => {
  expect(lcp(['flower', 'flow', 'flight'])).toBe('fl');
  expect(lcp(['dog', 'racecar', 'car'])).toBe('');
  expect(lcp([])).toBe('');
});

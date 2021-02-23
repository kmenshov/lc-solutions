const lps = require('./longest-palindromic-substring').main;

test('finds the longest palindromic substring', () => {
  expect(lps('babad')).toBe('bab');
  expect(lps('cbbd')).toBe('bb');
  expect(lps('a')).toBe('a');
  expect(lps('ac')).toBe('a');
  expect(lps('tattarrattat')).toBe('tattarrattat');
  expect(lps('bananas')).toBe('anana');
  expect(lps('ababababa')).toBe('ababababa');
});

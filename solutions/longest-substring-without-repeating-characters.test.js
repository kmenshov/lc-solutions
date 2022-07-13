const ls = require('./longest-substring-without-repeating-characters').main;

test('finds the length of the longest substring without repeating characters', () => {
  expect(ls('abcabcbb')).toBe(3);
  expect(ls('bbbbb')).toBe(1);
  expect(ls('pwwkew')).toBe(3);
  expect(ls('')).toBe(0);
  expect(ls(' ')).toBe(1);
  expect(ls('abba')).toBe(2);
  expect(ls('tmmzuxt')).toBe(5);
});

/* eslint-disable jest/expect-expect */
test.skip('longest-substring-without-repeating-characters benchmark', () => {
  const repeats = 50;

  const sourceLines = [];
  benchmark.repeat(repeats, () => {
    sourceLines.push(benchmark.randomString(10000));
  });

  let results = [];
  const t = benchmark.timer(`longest-substring-without-repeating-characters (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sourceLines.map(ls);
  });
  t.stop();

  // eslint-disable-next-line no-console
  console.log(results);
});

const { main: riMain, alternative: riAlternative } = require('./reverse-integer');

test('the main implementation reverses an integer within 32 bits', () => {
  expect(riMain(123)).toBe(321);
  expect(riMain(-123)).toBe(-321);
  expect(riMain(120)).toBe(21);
  expect(riMain(0)).toBe(0);
  expect(riMain(2147483647)).toBe(0);
  expect(riMain(-2147483645)).toBe(0);
});

test('the alternative implementation reverses an integer within 32 bits', () => {
  expect(riAlternative(123)).toBe(321);
  expect(riAlternative(-123)).toBe(-321);
  expect(riAlternative(120)).toBe(21);
  expect(riAlternative(0)).toBe(0);
  expect(riAlternative(2147483647)).toBe(0);
  expect(riAlternative(-2147483645)).toBe(0);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 1000000;
  const sources = [123, -123, 120, 0, 2147483647, -2147483645];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => riMain(s));
  });
  t.stop();
  expect(results).toEqual([321, -321, 21, 0, 0, 0]);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => riAlternative(s));
  });
  t.stop();
  expect(results).toEqual([321, -321, 21, 0, 0, 0]);
});

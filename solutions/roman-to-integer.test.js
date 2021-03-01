const { main, alternative } = require('./roman-to-integer');

test('the main implementation converts a roman number to an integer', () => {
  expect(main('III')).toBe(3);
  expect(main('IV')).toBe(4);
  expect(main('IX')).toBe(9);
  expect(main('LVIII')).toBe(58);
  expect(main('MCMXCIV')).toBe(1994);
});

test('the alternative implementation converts a roman number to an integer', () => {
  expect(alternative('III')).toBe(3);
  expect(alternative('IV')).toBe(4);
  expect(alternative('IX')).toBe(9);
  expect(alternative('LVIII')).toBe(58);
  expect(alternative('MCMXCIV')).toBe(1994);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 3000000;
  const sources = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV'];
  const expectations = [3, 4, 9, 58, 1994];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});

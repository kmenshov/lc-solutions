const { main, alternative } = require('./palindrome-number');

test('the main implementation checks if an integer is a palindrome', () => {
  expect(main(121)).toBe(true);
  expect(main(-121)).toBe(false);
  expect(main(10)).toBe(false);
  expect(main(-101)).toBe(false);
});

test('the alternative implementation checks if an integer is a palindrome', () => {
  expect(alternative(121)).toBe(true);
  expect(alternative(-121)).toBe(false);
  expect(alternative(10)).toBe(false);
  expect(alternative(-101)).toBe(false);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 1000000;
  const sources = [121, -121, 10, -101, 1234567890, 123454321, 1234554321];
  const expectations = [true, false, false, false, false, true, true];
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

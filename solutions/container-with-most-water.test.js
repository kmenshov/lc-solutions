const { main, alternative } = require('./container-with-most-water');

test('the main implementation finds the maximum space between array of heights', () => {
  expect(main([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(main([1, 1])).toBe(1);
  expect(main([4, 3, 2, 1, 4])).toBe(16);
  expect(main([1, 2, 1])).toBe(2);
});

test('the alternative implementation finds the maximum space between array of heights', () => {
  expect(alternative([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(alternative([1, 1])).toBe(1);
  expect(alternative([4, 3, 2, 1, 4])).toBe(16);
  expect(alternative([1, 2, 1])).toBe(2);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 30000000;
  const sources = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1],
    [4, 3, 2, 1, 4],
    [1, 2, 1],
  ];
  const expectations = [49, 1, 16, 2];
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

const { main, alternative } = require('./three-sum-closest');

test('main finds the closest 3Sum to target', () => {
  expect(main([-1, 2, 1, -4], 1)).toBe(2);
  expect(main([0, 0, 0], 1)).toBe(0);
  expect(main([1, 1, -1, -1, 3], 1)).toBe(1);
  expect(main([-1, 0, 1, 1, 55], 3)).toBe(2);
  expect(main([1, 1, 1, 0], 100)).toBe(3);
  expect(main([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)).toBe(-2);
  expect(main([0, 2, 1, -3], 1)).toBe(0);
  expect(main([-1, 0, 1, 2, -1, -4], 0)).toBe(0);
});

test('alternative finds the closest 3Sum to target', () => {
  expect(alternative([-1, 2, 1, -4], 1)).toBe(2);
  expect(alternative([0, 0, 0], 1)).toBe(0);
  expect(alternative([1, 1, -1, -1, 3], 1)).toBe(1);
  expect(alternative([-1, 0, 1, 1, 55], 3)).toBe(2);
  expect(alternative([1, 1, 1, 0], 100)).toBe(3);
  expect(alternative([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)).toBe(-2);
  expect(alternative([0, 2, 1, -3], 1)).toBe(0);
  expect(alternative([-1, 0, 1, 2, -1, -4], 0)).toBe(0);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 3_000_000;
  const sources = [
    [[-1, 2, 1, -4], 1],
    [[0, 0, 0], 1],
    [[1, 1, -1, -1, 3], 1],
    [[-1, 0, 1, 1, 55], 3],
    [[1, 1, 1, 0], 100],
    [[4, 0, 5, -5, 3, 3, 0, -4, -5], -2],
    [[0, 2, 1, -3], 1],
    [[-1, 0, 1, 2, -1, -4], 0],
  ];
  const expectations = [2, 0, 1, 2, 3, -2, 0, 0];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});

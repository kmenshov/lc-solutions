const { main, alternative } = require('./four-sum');

test('main implementation finds the 4-sum', () => {
  expect(main([1, 0, -1, 0, -2, 2], 0)).toEqual(
    [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
  );
  expect(main([2, 2, 2, 2, 2], 8)).toEqual(
    [[2, 2, 2, 2]],
  );
  expect(main([0, 0, 0, 0], 0)).toEqual(
    [[0, 0, 0, 0]],
  );
});

test('alternative implementation finds the 4-sum', () => {
  expect(alternative([1, 0, -1, 0, -2, 2], 0)).toEqual(
    [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
  );
  expect(alternative([2, 2, 2, 2, 2], 8)).toEqual(
    [[2, 2, 2, 2]],
  );
  expect(alternative([0, 0, 0, 0], 0)).toEqual(
    [[0, 0, 0, 0]],
  );
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 3_000_000;
  const sources = [
    [[1, 0, -1, 0, -2, 2], 0],
    [[2, 2, 2, 2, 2], 8],
    [[0, 0, 0, 0], 0],
  ];
  const expectations = [
    [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
    [[2, 2, 2, 2]],
    [[0, 0, 0, 0]],
  ];
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

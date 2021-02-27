const { main, alternative, alternative2 } = require('./regular-expression-matching');

test('the main implementation matches a string against a pattern', () => {
  expect(main('aa', 'a')).toBe(false);
  expect(main('aa', 'a*')).toBe(true);
  expect(main('ab', '.*')).toBe(true);
  expect(main('aab', 'c*a*b')).toBe(true);
  expect(main('mississippi', 'mis*is*p*.')).toBe(false);
  expect(main('aaa', 'ab*a')).toBe(false);
  expect(main('mississippi', 'mis*is*ip*.')).toBe(true);
  expect(main('aaa', 'ab*a*c*a')).toBe(true);
  expect(main('ab', '.*c')).toBe(false);
  expect(main('', '.')).toBe(false);
});

test('the alternative implementation matches a string against a pattern', () => {
  expect(alternative('aa', 'a')).toBe(false);
  expect(alternative('aa', 'a*')).toBe(true);
  expect(alternative('ab', '.*')).toBe(true);
  expect(alternative('aab', 'c*a*b')).toBe(true);
  expect(alternative('mississippi', 'mis*is*p*.')).toBe(false);
  expect(alternative('aaa', 'ab*a')).toBe(false);
  expect(alternative('mississippi', 'mis*is*ip*.')).toBe(true);
  expect(alternative('aaa', 'ab*a*c*a')).toBe(true);
  expect(alternative('ab', '.*c')).toBe(false);
  expect(alternative('', '.')).toBe(false);
});

test('the alternative2 implementation matches a string against a pattern', () => {
  expect(alternative2('aa', 'a')).toBe(false);
  expect(alternative2('aa', 'a*')).toBe(true);
  expect(alternative2('ab', '.*')).toBe(true);
  expect(alternative2('aab', 'c*a*b')).toBe(true);
  expect(alternative2('mississippi', 'mis*is*p*.')).toBe(false);
  expect(alternative2('aaa', 'ab*a')).toBe(false);
  expect(alternative2('mississippi', 'mis*is*ip*.')).toBe(true);
  expect(alternative2('aaa', 'ab*a*c*a')).toBe(true);
  expect(alternative2('ab', '.*c')).toBe(false);
  expect(alternative2('', '.')).toBe(false);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 1000000;
  const sources = [
    ['aa', 'a'],
    ['aa', 'a*'],
    ['ab', '.*'],
    ['aab', 'c*a*b'],
    ['mississippi', 'mis*is*p*.'],
    ['aaa', 'ab*a'],
    ['mississippi', 'mis*is*ip*.'],
    ['aaa', 'ab*a*c*a'],
    ['ab', '.*c'],
    ['', '.'],
  ];
  const expectations = [
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
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

  t = benchmark.timer(`The alternative2 implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative2(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});

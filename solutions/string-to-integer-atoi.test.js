const {
  main: atoiMain,
  alternative: atoiAlternative,
  alternative2: atoiAlternative2,
} = require('./string-to-integer-atoi');

test('the main implementation converts a string to an integer within 32 bits', () => {
  expect(atoiMain('42')).toBe(42);
  expect(atoiMain('   -42')).toBe(-42);
  expect(atoiMain('4193 with words')).toBe(4193);
  expect(atoiMain('words and 987')).toBe(0);
  expect(atoiMain('-91283472332')).toBe(-2147483648);
  expect(atoiMain('   +73')).toBe(73);
  expect(atoiMain('   ++73')).toBe(0);
  expect(atoiMain('   --73')).toBe(0);
  expect(atoiMain('   -8-73')).toBe(-8);
  expect(atoiMain('   +8+73')).toBe(8);
  expect(atoiMain('+-12')).toBe(0);
});

test('the alternative implementation converts a string to an integer within 32 bits', () => {
  expect(atoiAlternative('42')).toBe(42);
  expect(atoiAlternative('   -42')).toBe(-42);
  expect(atoiAlternative('4193 with words')).toBe(4193);
  expect(atoiAlternative('words and 987')).toBe(0);
  expect(atoiAlternative('-91283472332')).toBe(-2147483648);
  expect(atoiAlternative('   +73')).toBe(73);
  expect(atoiAlternative('   ++73')).toBe(0);
  expect(atoiAlternative('   --73')).toBe(0);
  expect(atoiAlternative('   -8-73')).toBe(-8);
  expect(atoiAlternative('   +8+73')).toBe(8);
  expect(atoiAlternative('+-12')).toBe(0);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 1000000;
  const sources = [
    '42',
    '   -42',
    '4193 with words',
    'words and 987',
    '-91283472332',
    '   +73',
    '   ++73',
    '   --73',
    '   -8-73',
    '   +8+73',
    '+-12',
  ];
  const expectations = [
    42,
    -42,
    4193,
    0,
    -2147483648,
    73,
    0,
    0,
    -8,
    8,
    0,
  ];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => atoiMain(s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => atoiAlternative(s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative2 implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => atoiAlternative2(s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});

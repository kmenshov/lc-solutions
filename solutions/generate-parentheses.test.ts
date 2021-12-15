import { main, alternative } from './generate-parentheses';

test('the main implementation of valid parentheses', () => {
  expect(main(3).sort()).toStrictEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort());
  expect(main(1)).toStrictEqual(['()']);
});

test('the alternative implementation of valid parentheses', () => {
  expect(alternative(3).sort()).toStrictEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort());
  expect(alternative(1)).toStrictEqual(['()']);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 5_000_000;
  const sources = [3, 1];
  const expectations = [
    ['((()))', '(()())', '(())()', '()(())', '()()()'].sort(),
    ['()'],
  ];
  let results: string[][] = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(s).sort());
  });
  t.stop();
  expect(results).toStrictEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(s).sort());
  });
  t.stop();
  expect(results).toStrictEqual(expectations);
});

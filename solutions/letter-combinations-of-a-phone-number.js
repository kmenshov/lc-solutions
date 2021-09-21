exports.prompts = [
  ['Provide phone digits without spaces: '],
];

exports.main = (digits) => {
  if (digits.length <= 0) return [];

  const phoneKeys = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const addCombinationsForDigit = (digit, prevString) => phoneKeys[digit].map((letter) => prevString + letter);
  return digits.split('').reduce(
    (prevStrings, digit) => prevStrings.map((prevString) => addCombinationsForDigit(digit, prevString)).flat(),
    [''],
  );
};

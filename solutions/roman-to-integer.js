/* eslint-disable consistent-return, default-case */
exports.prompts = [
  ['Provide a Roman number: '],
];

exports.main = (s) => {
  const map = (rChar) => {
    switch (rChar) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
    }
  };

  let num = map(s[s.length - 1]);
  for (let i = s.length - 2; i >= 0; i--) {
    const n = map(s[i]);
    // eslint-disable-next-line
    n < map(s[i + 1]) ? num -= n : num += n;
  }

  return num;
};

exports.alternative = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = map[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    const n = map[s[i]];
    // eslint-disable-next-line
    n < map[s[i + 1]] ? num -= n : num += n;
  }

  return num;
};

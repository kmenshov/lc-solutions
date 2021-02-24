/* eslint-disable no-continue */
exports.prompts = [
  ['Provide the input string: '],
];

exports.main = (s) => {
  const digits = '0123456789';
  const min = -2147483648;
  const max = 2147483647;

  // 0 - skipping spaces;
  // 1 - encountered the sign;
  // 2 - skipping leading zeros;
  // 3 - parsing the number.
  let parsing = 0;
  let negative = false;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    // while skipping leading spaces we're allowed to encounter a sign just once
    if (parsing < 1) {
      if (s[i] === ' ') continue;
      if (s[i] === '+') {
        parsing = 1;
        continue;
      }
      if (s[i] === '-') {
        parsing = 1;
        negative = true;
        continue;
      }
    }
    // skipping leading zeros
    if (parsing <= 2 && s[i] === '0') {
      parsing = 2;
      continue;
    }
    // now we can only encounter digits, or we stop
    parsing = 3;
    const n = digits.indexOf(s[i]);
    if (n === -1) break;
    num = num * 10 + n;
  }

  if (num === 0) return 0;
  if (negative) {
    num = -num;
    return num < min ? min : num;
  }
  return num > max ? max : num;
};

exports.alternative = (s) => {
  const digits = '0123456789';
  const min = -2147483648;
  const max = 2147483647;

  let negative = false;
  let num = 0;
  let i = 0;

  // skipping spaces:
  while (s[i] === ' ') i++;

  // allowed to encounter the sign here:
  if (s[i] === '-') {
    negative = true;
    i++;
  } else if (s[i] === '+') {
    i++;
  }

  // skipping leading zeros:
  while (s[i] === '0') i++;

  // parsing the number:
  while (i < s.length) {
    const n = digits.indexOf(s[i]);
    if (n === -1) break;
    num = num * 10 + n;
    i++;
  }

  if (num === 0) return 0;
  if (negative) {
    num = -num;
    return num < min ? min : num;
  }
  return num > max ? max : num;
};

exports.alternative2 = (s) => {
  const parsed = s.match(/^ *([+-]?)0*(\d*)/);
  if (!parsed[2]) return 0;

  const digits = '0123456789';
  const min = -2147483648;
  const max = 2147483647;

  let num = 0;
  for (let i = 0; i < parsed[2].length; i++) {
    const n = digits.indexOf(parsed[2][i]);
    if (n === -1) break;
    num = num * 10 + n;
  }

  if (num === 0) return 0;
  if (parsed[1] === '-') {
    num = -num;
    return num < min ? min : num;
  }
  return num > max ? max : num;
};

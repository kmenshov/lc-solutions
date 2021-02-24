exports.prompts = [
  ['Provide a test string: '],
  ['Provide the number of rows: ', parseInt],
];

exports.main = (s, numRows) => {
  if (numRows < 2) return s;

  let str = '';
  const step = 2 * numRows - 2;
  for (let row = 0; row < numRows; row++) {
    let column = 0;
    let firstChar, secondChar;
    do {
      firstChar = s[row + step * column];
      secondChar = row > 0 && row < (numRows - 1) ? s[step * (column + 1) - row] : undefined;
      if (firstChar) str += firstChar;
      if (secondChar) str += secondChar;
      column++;
    } while (firstChar || secondChar);
  }

  return str;
};

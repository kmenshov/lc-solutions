/* eslint-disable no-param-reassign */
exports.prompts = [
  ['Provide a test string: '],
];

exports.main = (s) => {
  if (s.length < 2) return s;

  let cursors = [0, 0];
  const len = (curs) => curs[1] - curs[0] + 1;
  const rememberIfLonger = (newCursors) => {
    if (len(newCursors) > len(cursors)) cursors = newCursors;
  };

  const longestPalindromeFromPosition = (left, right) => {
    while (left > 0 && right < (s.length - 1) && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }
    return [left, right];
  };

  let left = 0;
  while ((s.length - left) * 2 >= len(cursors)) {
    let right = left;
    while (s[left] === s[right + 1]) right++;
    rememberIfLonger(longestPalindromeFromPosition(left, right));
    left++;
  }

  return s.substring(cursors[0], cursors[1] + 1);
};

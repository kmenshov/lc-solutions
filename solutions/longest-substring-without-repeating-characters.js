exports.prompts = [
  ['Provide a test string: '],
];

exports.main = (s) => {
  const l = s.length;
  const set = new Set();

  let cursor1 = 0;
  let cursor2 = 0;
  let maxSubstrLen = 0;

  while (cursor2 < l) {
    if (!set.has(s[cursor2])) {
      set.add(s[cursor2]);
      maxSubstrLen = Math.max(maxSubstrLen, set.size);
      cursor2++;
    } else {
      set.delete(s[cursor1]);
      cursor1++;
    }
  }

  return maxSubstrLen;
};

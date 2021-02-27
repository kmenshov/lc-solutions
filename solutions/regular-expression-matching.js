exports.prompts = [
  ['Provide a test string: '],
  ['Provide a matching pttern: '],
];

// Because f*** you, that's why. If we're not dealing with CS-related problems,
// and rather solving practical tasks and/or delivering commercial apps,
// then the most pragmatic and fast to develop solution is the best.
exports.main = (s, p) => {
  const match = s.match(p);
  return match !== null && match[0].length === s.length;
};

exports.alternative = (s, p) => {
  const matchChar = (sChar, pChar) => sChar !== undefined && (pChar === '.' || pChar === sChar);

  const match = (sr, pt) => {
    if (pt.length === 0) return sr.length === 0;

    return pt[1] === '*' ?
      (match(sr, pt.substring(2)) || (matchChar(sr[0], pt[0]) && match(sr.substring(1), pt))) :
      (matchChar(sr[0], pt[0]) && match(sr.substring(1), pt.substring(1)));
  };

  return match(s, p);
};

exports.alternative2 = (s, p) => {
  const matches = [];
  for (let i = 0; i <= s.length; i++) matches[i] = new Array(p.length + 1).fill(false);

  matches[0][0] = true;

  // to match an empty string the pattern should be like a*b*c*d*...
  // (i.e. every second char should be an asterisk)
  for (let j = 2; j <= p.length; j += 2) if (p[j - 1] === '*' && matches[0][j - 2]) matches[0][j] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      matches[i][j] = p[j - 1] === '*' ?
        matches[i][j - 2] || (matches[i - 1][j] && (p[j - 2] === '.' || p[j - 2] === s[i - 1])) :
        matches[i - 1][j - 1] && (p[j - 1] === '.' || p[j - 1] === s[i - 1]);
    }
  }

  return matches[s.length][p.length];
};

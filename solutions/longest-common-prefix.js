exports.prompts = [
  ['Provide space separated test strings: ', (str) => str.split(' ')],
];

exports.main = (strs) => {
  if (strs.length < 2) return (strs[0] || '');

  const lcp = (str1, str2) => {
    const minLength = str1.length < str2.length ? str1.length : str2.length;
    let i = 0;
    while (i < minLength) {
      if (str1[i] !== str2[i]) break;
      i++;
    }
    return str1.slice(0, i);
  };

  let longestCommonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    longestCommonPrefix = lcp(longestCommonPrefix, strs[i]);
    if (longestCommonPrefix.length === 0) break;
  }

  return longestCommonPrefix;
};

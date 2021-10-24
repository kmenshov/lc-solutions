exports.prompts = [
  ['Provide a parentheses string: '],
];

exports.main = (s) => {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const openingSibling = pairs[char];
    if (openingSibling === undefined) { // the current char is an opening bracket itself
      stack.push(char);
    } else if (openingSibling !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

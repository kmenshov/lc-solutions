const { parseIntString } = require('../shared/utils');

exports.prompts = [
  ['Provide the heights: ', parseIntString],
];

exports.main = (height) => {
  let maxSpace = 0;
  let left = 0;
  let right = height.length - 1;
  let space = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      space = height[left] * (right - left);
      left++;
    } else {
      space = height[right] * (right - left);
      right--;
    }
    if (maxSpace < space) maxSpace = space;
  }

  return maxSpace;
};

exports.alternative = (height) => {
  let maxSpace = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minHeight = height[i] < height[j] ? height[i] : height[j]; // Math is incredibly slow
      const space = minHeight * (j - i);
      if (maxSpace < space) maxSpace = space;
    }
  }
  return maxSpace;
};

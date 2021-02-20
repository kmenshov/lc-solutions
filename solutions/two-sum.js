const { parseIntString } = require('../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
  ['Provide the sum target: ', (s) => parseInt(s, 10)],
];

exports.main = (nums, target) => {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return Array(2);
};

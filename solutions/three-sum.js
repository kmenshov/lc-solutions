const { parseIntString } = require('../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (nums) => {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let low = i + 1;
      let hi = nums.length - 1;
      const target = 0 - nums[i];

      while (low < hi) {
        if (nums[low] + nums[hi] === target) {
          results.push([nums[i], nums[low], nums[hi]]);
          while (low < hi && nums[low] === nums[low + 1]) low++;
          while (low < hi && nums[hi] === nums[hi - 1]) hi--;
          low++;
          hi--;
        } else if (nums[low] + nums[hi] < target) {
          while (low < hi && nums[low] === nums[low + 1]) low++;
          low++;
        } else {
          while (low < hi && nums[hi] === nums[hi - 1]) hi--;
          hi--;
        }
      }
    }
  }

  return results;
};

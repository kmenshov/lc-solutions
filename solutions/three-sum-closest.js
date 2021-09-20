const { parseIntString, parseInt10 } = require('../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
  ['Provide the sum target: ', parseInt10],
];

exports.main = (nums, target) => {
  nums.sort((a, b) => a - b);
  let currentSum = nums[0] + nums[1] + nums[nums.length - 1];
  let closestSum = currentSum;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let low = i + 1;
    let hi = nums.length - 1;
    while (low < hi) {
      currentSum = nums[i] + nums[low] + nums[hi];

      if (currentSum < target) {
        while (low < hi && nums[low] === nums[low + 1]) low++;
        low++;
      } else if (currentSum > target) {
        while (low < hi && nums[hi] === nums[hi - 1]) hi--;
        hi--;
      } else return currentSum;

      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }
    }
  }

  return closestSum;
};

exports.alternative = (nums, target) => {
  nums.sort((a, b) => a - b);
  const { length } = nums;

  let minSum = nums[0] + nums[1] + nums[2];
  let maxSum = nums[length - 1] + nums[length - 2] + nums[length - 3];

  if (target < minSum) return minSum;
  if (target > maxSum) return maxSum;

  for (let i = 0; i < length - 2; i++) {
    const lowSum = nums[i] + nums[i + 1] + nums[i + 2];
    const hiSum = nums[i] + nums[length - 1] + nums[length - 2];
    if (target < lowSum) {
      if (lowSum < maxSum) maxSum = lowSum;
      continue;
    }
    if (target > hiSum) {
      if (hiSum > minSum) minSum = hiSum;
      continue;
    }

    let low = i + 1;
    let hi = length - 1;
    while (low < hi) {
      const currentSum = nums[i] + nums[low] + nums[hi];
      if (currentSum === target) return currentSum;

      if (currentSum > target) {
        if (currentSum < maxSum) maxSum = currentSum;
        while (low < hi && nums[hi] === nums[hi - 1]) hi--;
        hi--;
      } else {
        if (currentSum > minSum) minSum = currentSum;
        while (low < hi && nums[low] === nums[low + 1]) low++;
        low++;
      }
    }
  }

  return (maxSum - target) < (target - minSum) ? maxSum : minSum;
};

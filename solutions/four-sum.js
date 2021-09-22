/* eslint-disable prefer-template, no-shadow, no-param-reassign */
const { parseIntString, parseInt10 } = require('../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
  ['Provide the sum target: ', parseInt10],
];

exports.main = (nums, target) => {
  const twoSumSorted = (low, hi, target, prefixesArray = [], results = []) => {
    while (low < hi) {
      if (nums[low] + nums[hi] === target) {
        results.push([...prefixesArray, nums[low], nums[hi]]);
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
  };

  const nSumSorted = (low, hi, n, target, prefixesArray = [], results = []) => {
    if (
      n < 2 ||
      hi - low + 1 < n ||
      target < nums[low] * n ||
      target > nums[hi] * n
    ) return;

    if (n === 2) {
      twoSumSorted(low, hi, target, prefixesArray, results);
      return;
    }

    for (let i = low; i < hi - 1; i++) {
      if (i > low && nums[i] === nums[i - 1]) continue;
      nSumSorted(i + 1, hi, n - 1, target - nums[i], [...prefixesArray, nums[i]], results);
    }
  };

  nums.sort((a, b) => a - b);
  const results = [];
  nSumSorted(0, nums.length - 1, 4, target, [], results);
  return results;
};

exports.alternative = (nums, target) => {
  nums.sort((a, b) => a - b);
  const results = [];
  const resultSignatures = new Set();

  let [a, b, c, d] = [0, 1, 2, 3];
  while (a < nums.length - 3 && nums[a] + nums[b] + nums[c] + nums[d] <= target) {
    while (b < nums.length - 2 && nums[a] + nums[b] + nums[c] + nums[d] <= target) {
      while (c < nums.length - 1 && nums[a] + nums[b] + nums[c] + nums[d] <= target) {
        while (d < nums.length && nums[a] + nums[b] + nums[c] + nums[d] <= target) {
          if (
            nums[a] + nums[b] + nums[c] + nums[d] === target &&
            !resultSignatures.has('' + nums[a] + nums[b] + nums[c] + nums[d])
          ) {
            results.push([nums[a], nums[b], nums[c], nums[d]]);
            resultSignatures.add('' + nums[a] + nums[b] + nums[c] + nums[d]);
          }
          d++;
        }
        c++;
        d = c + 1;
      }
      b++;
      c = b + 1;
      d = c + 1;
    }
    a++;
    b = a + 1;
    c = b + 1;
    d = c + 1;
  }

  return results;
};

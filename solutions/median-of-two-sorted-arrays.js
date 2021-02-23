/* eslint-disable */

const { parseIntString } = require('../shared/utils');

exports.prompts = [
  ['Enter array 1: ', parseIntString],
  ['Enter array 2: ', parseIntString],
];

exports.main = (nums1, nums2) => {
  const mergeSortedArrays = (arr1, arr2) => {
    const merged = [];
    let i1 = 0;
    let i2 = 0;
    let iMerged = 0;

    const arr2Length = arr2.length;
    const mergedLength = arr1.length + arr2Length;

    while (iMerged < mergedLength) {
      const val1 = arr1[i1];
      const val2 = arr2[i2];

      if (val1 < val2 || i2 >= arr2Length) {
        merged[iMerged] = val1;
        i1++;
      } else {
        merged[iMerged] = val2;
        i2++;
      }

      iMerged++;
    }

    return merged;
  }

  const merged = mergeSortedArrays(nums1, nums2);
  const middle = merged.length / 2;
  if (!Number.isInteger(middle)) return merged[Math.floor(middle)];
  return (merged[middle - 1] + merged[middle]) / 2;
};

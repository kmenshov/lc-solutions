const { stringToList } = require('../shared/utils');

exports.prompts = [
  ['Provide the first space-separated array of integers: ', stringToList],
  ['Provide the second space-separated array of integers: ', stringToList],
];

exports.main = (l1, l2) => {
  const findListLength = (l) => {
    let i = 1;
    let list = l;
    while (list.next !== null) {
      i++;
      list = list.next;
    }
    return i;
  };

  /* eslint-disable no-param-reassign */
  const rightShiftOne = (l) => {
    l.next = l.next || { val: 0, next: null };
    if (l.next.val < 9) {
      l.next.val += 1;
    } else {
      l.next.val = 0;
      rightShiftOne(l.next);
    }
  };
  /* eslint-enable */

  const len1 = findListLength(l1);
  const len2 = findListLength(l2);

  const lists = len1 < len2 ? [l1, l2] : [l2, l1];

  let cursor1 = lists[0];
  let cursor2 = lists[1];
  do {
    const sum = cursor1.val + cursor2.val;
    cursor2.val = sum % 10;
    if (sum > 9) rightShiftOne(cursor2);
    cursor1 = cursor1.next;
    cursor2 = cursor2.next;
  } while (cursor1 !== null);

  return lists[1];
};

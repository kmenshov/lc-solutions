const { stringToList, parseInt10 } = require('../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', stringToList],
  ['Provide the index from the end to remove: ', parseInt10],
];

exports.main = (head, n) => {
  if (head.next === null) return null;

  const listMap = [head, head.next];
  let currPos = head.next;
  while (currPos.next !== null) {
    listMap.push(currPos.next);
    currPos = currPos.next;
  }

  const prevNode = listMap[listMap.length - n - 1];
  if (prevNode === undefined) return listMap[1];

  const nextNode = listMap[listMap.length - n + 1] || null;
  prevNode.next = nextNode;
  return listMap[0];
};

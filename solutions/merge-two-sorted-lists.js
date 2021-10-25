const { stringToList } = require('../shared/utils');

exports.prompts = [
  ['Provide the first sorted list: ', stringToList],
  ['Provide the second sorted list: ', stringToList],
];

exports.main = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const node = (val) => ({ val, next: null });
  let head, sourceListsCursors;

  if (l1.val < l2.val) {
    head = node(l1.val);
    sourceListsCursors = [l1.next, l2];
  } else {
    head = node(l2.val);
    sourceListsCursors = [l1, l2.next];
  }

  let joinedListCursor = head;
  while (true) {
    if (sourceListsCursors[0] === null) {
      joinedListCursor.next = sourceListsCursors[1];
      return head;
    }
    if (sourceListsCursors[1] === null) {
      joinedListCursor.next = sourceListsCursors[0];
      return head;
    }

    const next = sourceListsCursors[0].val < sourceListsCursors[1].val ? 0 : 1;
    joinedListCursor.next = node(sourceListsCursors[next].val);
    joinedListCursor = joinedListCursor.next;
    sourceListsCursors[next] = sourceListsCursors[next].next;
  }
};

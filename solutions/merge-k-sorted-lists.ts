import { arrayToList, node } from '../shared/utils';

import type { ListNode } from '../shared/types';

export const prompts = [
  [
    'Provide the array of k arrays with source data: ',
    (str: string) => {
      const arrays: number[][] = JSON.parse(str);
      return arrays.map((list) => arrayToList(list));
    },
  ],
];

type ListsArray = (ListNode<number> | null)[];
type TwoLists = [ListNode<number> | null, ListNode<number> | null];

export const main = (lists: ListsArray) => {
  if (lists.length === 0) return null;
  const nonEmptyLists = lists.filter((l) => l !== null);

  const extractMin = (listsArr: ListsArray) => {
    let minVal: number | undefined;
    let minIndex = -1;

    for (let i = 0; i < listsArr.length; i++) {
      const list = listsArr[i];
      // if (list === null) continue;

      const { val } = list!;
      if (minVal === undefined || minVal > val) {
        minVal = val;
        minIndex = i;
      }
    }

    if (minVal !== undefined) {
      const nextVal = listsArr[minIndex]!.next;
      if (nextVal === null) {
        listsArr.splice(minIndex, 1);
      } else {
        // eslint-disable-next-line no-param-reassign
        listsArr[minIndex] = nextVal;
      }
    }
    return minVal;
  };

  let nextVal = extractMin(nonEmptyLists);
  if (nextVal === undefined) return null;

  const head: ListNode<number> = node(nextVal);
  let cursor = head;
  // eslint-disable-next-line no-cond-assign
  while ((nextVal = extractMin(nonEmptyLists)) !== undefined) {
    cursor.next = node(nextVal);
    cursor = cursor.next;
  }
  return head;
};

// the alternative is faster
export const alternative = (lists: ListsArray) => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const mergeTwoSortedLists = (...[l1, l2]: TwoLists) => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let head: ListNode<number>, sourceListsCursors: TwoLists;

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
      joinedListCursor.next = node(sourceListsCursors[next]!.val);
      joinedListCursor = joinedListCursor.next;
      sourceListsCursors[next] = sourceListsCursors[next]!.next;
    }
  };

  function divideAndConquer(startIndex: number, endIndex: number): ListNode<number> | null {
    if (startIndex === endIndex) return lists[startIndex];
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const leftSide = divideAndConquer(startIndex, midIndex);
    const rightSide = divideAndConquer(midIndex + 1, endIndex);
    return mergeTwoSortedLists(leftSide, rightSide);
  }
  return divideAndConquer(0, lists.length - 1);
};

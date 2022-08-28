import { stringToList, parseInt10 } from '../shared/utils';

import type { ListNode } from '../shared/types';

export const prompts = [
  ['Provide the array of integers: ', stringToList],
  ['Provide the group length: ', parseInt10],
];

export const main = (head: ListNode | null, k: number): ListNode | null => {
  if (head === null || head.next === null || k < 2) return head;

  const fetchWindow = (firstNode: ListNode | null, length: number) => {
    const window: ListNode[] = [];
    let i = 0;
    let nextNode: ListNode | null = firstNode;

    while (i < length) {
      if (nextNode === null) return null; // the window is longer than the remaining nodes
      window[i] = nextNode;
      nextNode = nextNode.next;
      i++;
    }

    return window;
  };

  let newHead = null;
  let first: ListNode | null = head;
  let prev: ListNode = { val: undefined, next: first };

  while (true) {
    const w = fetchWindow(first, k);
    if (!w) return newHead ?? head;

    const windowEnd = w[k - 1];
    newHead ??= windowEnd;
    first = windowEnd.next;
    prev.next = windowEnd;
    prev = w[0];
    prev.next = first;

    for (let i = k - 1; i > 0; i--) {
      w[i].next = w[i - 1];
    }
  }
};

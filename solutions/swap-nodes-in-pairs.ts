import { arrayToList } from '../shared/utils';

import type { ListNode } from '../shared/types';

export const prompts = [
  [
    'Provide the array of integers: ', arrayToList,
  ],
];

export const main = (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) return head;
  const newHead = head.next;

  let first: ListNode | null = head;
  let second: ListNode | null = newHead;
  let prev: ListNode = { val: undefined, next: first };

  while (first !== null && second !== null) {
    const third: ListNode | null = second.next;
    second.next = first;
    first.next = third;
    prev.next = second;

    prev = first;
    first = third;
    second = third?.next ?? null;
  }

  return newHead;
};

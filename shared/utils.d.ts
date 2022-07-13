import type { ListNode } from './types';

export declare function parseIntString(spaceSeparatedIntegersString: string): number[];
export declare function parseInt10(str: string): number;

export declare function stringToList(inputString: string): ListNode;
export declare function arrayToList<T = any>(sourceArr: T[]): ListNode<T>;
export declare function listToArray<T = any>(head: ListNode<T> | null): T[];

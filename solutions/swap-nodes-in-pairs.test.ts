import { main } from './swap-nodes-in-pairs';
import { stringToList, listToArray } from '../shared/utils';

test('main implementation swaps nodes in pairs', () => {
  expect(
    listToArray(
      main(stringToList('1 2 3 4')),
    ),
  ).toStrictEqual(
    [2, 1, 4, 3],
  );
});

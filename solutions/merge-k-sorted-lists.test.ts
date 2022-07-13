import { main, alternative } from './merge-k-sorted-lists';
import { stringToList, listToArray } from '../shared/utils';

test('main implementation merges K sorted lists', () => {
  expect(
    listToArray(main([
      stringToList('1 4 5'),
      stringToList('1 3 4'),
      stringToList('2 6'),
    ])),
  ).toStrictEqual(
    [1, 1, 2, 3, 4, 4, 5, 6],
  );
});

test('alternative implementation merges K sorted lists', () => {
  expect(
    listToArray(alternative([
      stringToList('1 4 5'),
      stringToList('1 3 4'),
      stringToList('2 6'),
    ])),
  ).toStrictEqual(
    [1, 1, 2, 3, 4, 4, 5, 6],
  );
});

import { main } from './reverse-nodes-in-k-group';
import { stringToList, listToArray } from '../shared/utils';

test('main implementation reverses nodes in k-groups', () => {
  expect(
    listToArray(
      main(stringToList('1 2 3 4 5 6 7'), 3),
    ),
  ).toStrictEqual(
    [3, 2, 1, 6, 5, 4, 7],
  );

  expect(
    listToArray(
      main(stringToList('1 2 3 4 5'), 2),
    ),
  ).toStrictEqual(
    [2, 1, 4, 3, 5],
  );

  expect(
    listToArray(
      main(stringToList('1 2 3 4 5'), 3),
    ),
  ).toStrictEqual(
    [3, 2, 1, 4, 5],
  );

  expect(
    listToArray(
      main(stringToList('1 2 3 4 5 6'), 3),
    ),
  ).toStrictEqual(
    [3, 2, 1, 6, 5, 4],
  );

  expect(
    listToArray(
      main(stringToList('1 2 3 4 5 6'), 2),
    ),
  ).toStrictEqual(
    [2, 1, 4, 3, 6, 5],
  );

  expect(
    listToArray(
      main(stringToList('1 2 3 4 5 6 7'), 10),
    ),
  ).toStrictEqual(
    [1, 2, 3, 4, 5, 6, 7],
  );
});

const rnth = require('./remove-nth-node-from-end-of-list').main;
const { stringToList, listToArray } = require('../shared/utils');

test('removes the Nth node from the end of the list', () => {
  expect(
    listToArray(rnth(stringToList('1 2 3 4 5'), 2)),
  ).toEqual(
    [1, 2, 3, 5],
  );

  expect(
    listToArray(rnth(stringToList('1 2'), 1)),
  ).toEqual(
    [1],
  );

  expect(
    listToArray(rnth(stringToList('1'), 1)),
  ).toEqual(
    [],
  );

  expect(
    listToArray(rnth(stringToList('1 2'), 2)),
  ).toEqual(
    [2],
  );
});

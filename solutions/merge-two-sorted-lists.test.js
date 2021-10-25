const mtsl = require('./merge-two-sorted-lists').main;
const { stringToList, listToArray } = require('../shared/utils');

test('merges two sorted lists', () => {
  expect(
    listToArray(mtsl(stringToList('1 2 4'), stringToList('1 3 4'))),
  ).toEqual(
    [1, 1, 2, 3, 4, 4],
  );
});

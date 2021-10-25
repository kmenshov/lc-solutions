function parseIntString(spaceSeparatedIntegersString) {
  return spaceSeparatedIntegersString.split(' ').map((i) => parseInt(i, 10));
}

exports.parseIntString = parseIntString;

exports.parseInt10 = function parseInt10(str) {
  return parseInt(str, 10);
};

exports.stringToList = function stringToList(inputString) {
  const arr = parseIntString(inputString);
  const node = (val) => ({ val, next: null });

  const list = node(arr.shift());
  let currentPos = list;
  arr.forEach((val) => {
    currentPos.next = node(val);
    currentPos = currentPos.next;
  });

  return list;
};

exports.listToArray = function listToArray(head) {
  const arr = [];
  if (head === null) return arr;

  let currPos = head;
  do {
    arr.push(currPos.val);
    currPos = currPos.next;
  } while (currPos !== null);

  return arr;
};

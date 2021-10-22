function parseIntString(spaceSeparatedIntegersString) {
  return spaceSeparatedIntegersString.split(' ').map((i) => parseInt(i, 10));
}

exports.parseIntString = parseIntString;

exports.parseInt10 = function parseInt10(str) {
  return parseInt(str, 10);
};

exports.stringToList = (inputString) => {
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

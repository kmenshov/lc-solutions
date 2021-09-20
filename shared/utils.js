exports.parseIntString = function parseIntString(spaceSeparatedIntegersString) {
  return spaceSeparatedIntegersString.split(' ').map((i) => parseInt(i, 10));
};

exports.parseInt10 = function parseInt10(str) {
  return parseInt(str, 10);
};

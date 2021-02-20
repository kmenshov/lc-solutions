exports.parseIntString = function parseIntString(spaceSeparatedIntegersString) {
  return spaceSeparatedIntegersString.split(' ').map((i) => parseInt(i, 10));
};

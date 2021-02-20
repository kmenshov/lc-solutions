/* global performance */
/* eslint-disable no-console */

exports.timer = function timer(name) {
  const start = performance.now();
  return {
    stop: function stop() {
      const end = performance.now();
      console.log('Timer:', name, 'finished in', end - start, 'ms');
    },
  };
};

exports.repeat = function repeat(times, callback) {
  let i = 0;
  while (i++ < times) callback();
};

function randomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }
exports.randomInt = randomInt;

const defaultCharSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
exports.randomString = function randomString(length, charSet = defaultCharSet) {
  const charSetLength = charSet.length;
  let result = '';
  for (let i = 0; i < length; i++) result += charSet[randomInt(charSetLength)];
  return result;
};

// Expects an array of prompts for the user.
// Each array element must contain a prompt string and a conversion function (optional).
// Example:
// [
//   ['Input a number:', parseInt],
//   ['Input a string:'],
// ]
//
// Returns an array of user inputs with conversions applied.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlinePromise = (prompt) => new Promise((resolve) => {
  readline.question(prompt, resolve);
});

module.exports = function promptUser(...prompts) {
  const collectInputs = prompts.reduce(
    (prevInputsPromise, nextPrompt) => prevInputsPromise.then((inputs) => {
      const [question, transform] = nextPrompt;

      return readlinePromise(question).then((inputString) => {
        const input = typeof transform === 'function' ? transform(inputString) : inputString;
        inputs.push(input);
        return inputs;
      });
    }),
    Promise.resolve([]),
  );

  return collectInputs.then((inputs) => {
    readline.close();
    return inputs;
  });
};

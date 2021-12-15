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

type Prompt = [prompt: string, conversion?: (s: string) => any];

const readlinePromise = (prompt: string): Promise<string> => new Promise((resolve) => {
  readline.question(prompt, resolve);
});

function promptUser(...prompts: Prompt[]) {
  const collectInputs = prompts.reduce(
    (prevInputsPromise, nextPrompt) => prevInputsPromise.then((inputs) => {
      const [question, transform] = nextPrompt;

      return readlinePromise(question).then((inputString) => {
        const input = typeof transform === 'function' ? transform(inputString) : inputString;
        inputs.push(input);
        return inputs;
      });
    }),
    Promise.resolve([] as any[]),
  );

  return collectInputs.then((inputs) => {
    readline.close();
    return inputs;
  });
};

export default promptUser;

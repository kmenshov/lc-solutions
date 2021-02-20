/* eslint-disable no-console */
const prompt = require('./shared/prompt.js');

const separator = '/';
const solutionPath = process.argv.splice(2).reduce(
  (pathArray, nextArg) => pathArray.concat(nextArg.split(separator)),
  [],
).join(separator);

console.log(solutionPath);

// eslint-disable-next-line import/no-dynamic-require
const solution = require(`./solutions/${solutionPath}`);

prompt(...solution.prompts).then((inputs) => console.log(solution.main(...inputs)));

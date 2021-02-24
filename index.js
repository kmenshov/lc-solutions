const prompt = require('./shared/prompt.js');

const separator = '/';
let solutionPath;
if (process.argv.length === 3 && process.argv[2].includes(separator)) {
  solutionPath = process.argv[2];
} else {
  solutionPath = process.argv.splice(2).reduce(
    (pathArray, nextArg) => pathArray.concat(nextArg.split(separator)),
    ['solutions'],
  ).join(separator);
}

console.log(solutionPath);
// eslint-disable-next-line import/no-dynamic-require
const solution = require(`./${solutionPath}`);

prompt(...solution.prompts).then((inputs) => console.log(solution.main(...inputs)));

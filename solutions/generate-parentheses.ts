import { parseInt10 } from '../shared/utils';

export const prompts = [
  ['Number of pairs of parentheses: ', parseInt10],
];

export const main = (n: number): string[] => {
  const validCombinations: string[] = [];

  const addNextParenthesis = (currentCombination: string, openingLeft: number, closingLeft: number) => {
    if (openingLeft === closingLeft) {
      if (openingLeft === 0) {
        validCombinations.push(currentCombination);
      } else {
        addNextParenthesis(currentCombination + '(', openingLeft - 1, closingLeft);
      }
      return;
    }

    if (openingLeft === 0) {
      addNextParenthesis(currentCombination + ')', openingLeft, closingLeft - 1);
      return;
    }

    addNextParenthesis(currentCombination + ')', openingLeft, closingLeft - 1);
    addNextParenthesis(currentCombination + '(', openingLeft - 1, closingLeft);
  };

  addNextParenthesis('(', n - 1, n);

  return validCombinations;
};

export const alternative = (n: number): string[] => {
  const validCombinations: string[] = [];

  const addNextParenthesis = (currentCombination: string, openingLeft: number, closingLeft: number) => {
    if (closingLeft === 0 && openingLeft === 0) {
      validCombinations.push(currentCombination);
      return;
    }

    if (openingLeft > 0) addNextParenthesis(currentCombination + '(', openingLeft - 1, closingLeft);
    if (closingLeft > openingLeft) addNextParenthesis(currentCombination + ')', openingLeft, closingLeft - 1);
  };

  addNextParenthesis('(', n - 1, n);

  return validCombinations;
};

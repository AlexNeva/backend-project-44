import app from '../index.js';
import getRandomElement from '../getRandomElement.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return +firstNum + +secondNum;
    case '-':
      return +firstNum - +secondNum;
    case '*':
      return +firstNum * +secondNum;
    default:
      return +firstNum + +secondNum;
  }
};

const generateRound = () => {
  const firstNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const operation = getRandomElement(operations);

  const question = `${firstNum} ${operation} ${secondNum}`;
  const result = `${calculate(firstNum, secondNum, operation)}`;

  return [question, result];
};

export default () => app(purpose, generateRound);

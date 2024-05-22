import app from '../index.js';
import getRandomElement from '../getRandomElement.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = () => {
  const firstNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const operation = getRandomElement(operations);

  const expression = `${firstNum} ${operation} ${secondNum}`;

  return expression;
};
const generateRound = () => {
  let result;
  const question = calculate();
  const [firstNum, operation, secondNum] = question.split(' ');

  switch (operation) {
    case '+':
      result = `${+firstNum + +secondNum}`;
      break;
    case '-':
      result = `${+firstNum - +secondNum}`;
      break;
    case '*':
      result = `${+firstNum * +secondNum}`;
      break;
    default:
      result = `${+firstNum + +secondNum}`;
  }

  return [question, result];
};

export default () => app(purpose, generateRound);

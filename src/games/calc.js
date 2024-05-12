import app from '../index.js';
import getRandomElement from '../getRandomElement.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getExspression = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const operation = getRandomElement(operations);

  const expression = `${firstNum} ${operation} ${secondNum}`;

  return expression;
};
const getExpressionResult = (expression) => {
  const [firstNum, operation, secondNum] = expression.split(' ');

  switch (operation) {
    case '+':
      return (+firstNum + +secondNum).toString();
    case '-':
      return (+firstNum - +secondNum).toString();
    case '*':
      return (+firstNum * +secondNum).toString();
    default:
      return (+firstNum + +secondNum).toString();
  }
};

export default () => app(purpose, getExspression, getExpressionResult);

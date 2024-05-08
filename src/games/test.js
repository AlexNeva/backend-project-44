import getRandomElement from '../getRandomElement.js';
import getRandomInt from '../getRandomInt.js';
import app from '../index.js';
import isEven from '../isEven.js';

const purpose = 'Answer "yes" if the number is even, otherwise answer "no".';
const getNum = () => getRandomInt();
const getResult = (num) => (isEven(num) ? 'yes' : 'no');

const testEven = () => app(purpose, getNum, getResult);

testEven();

const start = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getExspression = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
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

const testCalc = () => app(start, getExspression, getExpressionResult);

testCalc();

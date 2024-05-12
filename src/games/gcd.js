import getRandomInt from '../getRandomInt.js';
import app from '../index.js';

const purpose = 'Find the greatest common divisor of given numbers.';
const getQuestion = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  return `${firstNum} ${secondNum}`;
};

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const getResult = (question) => {
  const [firstNum, secondNum] = question.split(' ');

  return `${gcd(firstNum, secondNum)}`;
};

export default () => app(purpose, getQuestion, getResult);

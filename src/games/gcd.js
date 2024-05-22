import getRandomInt from '../getRandomInt.js';
import app from '../index.js';

const purpose = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const generateRound = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `${firstNum} ${secondNum}`;

  const result = gcd(firstNum, secondNum).toString();

  return [question, result];
};

export default () => app(purpose, generateRound);

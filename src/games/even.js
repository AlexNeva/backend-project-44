import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const result = isEven(question) ? 'yes' : 'no';

  return [question, result];
};

export default () => app(purpose, generateRound);

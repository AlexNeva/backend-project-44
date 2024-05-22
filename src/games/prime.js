import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';

  return [question, result];
};

export default () => app(purpose, generateRound);

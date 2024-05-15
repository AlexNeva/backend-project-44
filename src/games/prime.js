import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isPrime from '../isPrime.js';

const purpose = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNum = () => getRandomInt(1, 100);

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

const getResult = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => app(purpose, getNum, getResult);

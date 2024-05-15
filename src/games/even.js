import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const purpose = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNum = () => getRandomInt(1, 100);

const isEven = (num) => num % 2 === 0;

const getResult = (num) => (isEven(num) ? 'yes' : 'no');

export default () => app(purpose, getNum, getResult);

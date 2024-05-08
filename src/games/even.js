import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isEven from '../isEven.js';

const purpose = 'Answer "yes" if the number is even, otherwise answer "no".';
const getNum = () => getRandomInt();
const getResult = (num) => (isEven(num) ? 'yes' : 'no');

export default () => app(purpose, getNum, getResult);

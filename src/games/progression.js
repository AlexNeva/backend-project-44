import getRandomInt from '../getRandomInt.js';
import app from '../index.js';

const getProgression = (length = 10, step = 2, startNum = 1) => {
  const progression = [startNum];

  for (let i = 1; i < length; i += 1) {
    const newNum = progression[i - 1] + step;

    progression.push(newNum);
  }

  return progression;
};

const purpose = 'What number is missing in the progression?';

const getQuestion = () => {
  const progressionLength = 10;
  const progression = getProgression(progressionLength, getRandomInt(2, 5), getRandomInt(1, 10));
  const randomIndex = getRandomInt(1, progressionLength);
  progression.splice(randomIndex, 1, '..');
  return progression.join(' ');
};

const getResult = (question) => {
  const progression = question.split(' ');
  const emptyNumIndex = progression.indexOf('..');

  const prevNum = progression[emptyNumIndex - 1];
  const nextNum = progression[emptyNumIndex + 1];

  if (nextNum) {
    const result = (+prevNum + +nextNum) / 2;
    return `${result}`;
  }

  const step = +prevNum - +progression[emptyNumIndex - 2];
  return `${+prevNum + step}`;
};

export default () => app(purpose, getQuestion, getResult);

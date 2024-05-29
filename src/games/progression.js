import getRandomInt from '../getRandomInt.js';
import app from '../index.js';

const progressionLength = 10;

const getProgression = (length = 10, step = 2, startNum = 1) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const current = startNum + step * i;

    progression.push(current);
  }

  return progression;
};

const getQuestion = (progression) => {
  const randomIndex = getRandomInt(0, progressionLength - 1);
  progression.splice(randomIndex, 1, '..');
  return progression.join(' ');
};

const purpose = 'What number is missing in the progression?';

const generateRound = () => {
  let result;
  const progression = getProgression(progressionLength, getRandomInt(2, 5), getRandomInt(1, 10));
  const question = getQuestion(progression);

  const emptyNumIndex = progression.indexOf('..');

  const prevNum = progression[emptyNumIndex - 1];
  const nextNum = progression[emptyNumIndex + 1];

  if (nextNum) {
    result = `${(+prevNum + +nextNum) / 2}`;
  } else {
    const step = +prevNum - +progression[emptyNumIndex - 2];
    result = `${+prevNum + step}`;
  }

  return [question, result];
};

export default () => app(purpose, generateRound);

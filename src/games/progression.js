import getRandomInt from '../getRandomInt.js';
import app from '../index.js';

const purpose = 'What number is missing in the progression?';

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

const generateRound = () => {
  const progressionStep = getRandomInt(2, 5);
  const progressionStart = getRandomInt(1, 10);
  const progression = getProgression(progressionLength, progressionStep, progressionStart);
  const question = getQuestion(progression);

  const emptyNumIndex = progression.indexOf('..');

  const result = `${progressionStart + progressionStep * emptyNumIndex}`;

  return [question, result];
};

export default () => app(purpose, generateRound);

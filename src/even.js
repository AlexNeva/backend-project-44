import readlineSync from 'readline-sync';

import getRandomInt from './getRandomInt.js';
import isEven from './isEven.js';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersLeft = 3;

  while (correctAnswersLeft > 0) {
    const randomInt = getRandomInt();
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomInt) ? 'yes' : 'no';

    if (correctAnswer !== answer.toLocaleLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
    correctAnswersLeft -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default even;

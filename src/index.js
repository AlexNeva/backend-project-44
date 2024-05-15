import readlineSync from 'readline-sync';

const app = (purpose, getQuestion, getResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(purpose);

  let correctAnswersLeft = 3;

  while (correctAnswersLeft > 0) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const result = getResult(question);

    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersLeft -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default app;

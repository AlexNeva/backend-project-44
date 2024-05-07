import getRandomElement from '../getRandomElement.js';
import getRandomInt from '../getRandomInt.js';
import readlineSync from 'readline-sync';

const operations = ['+', '-', '*'];

const getExpressionResult = (expression) => {
  const [firstNum, operation, secondNum] = expression.split(' ');

  switch (operation) {
    case '+':
      return +firstNum + +secondNum;
    case '-':
      return +firstNum - +secondNum;
    case '*':
      return +firstNum * +secondNum;
    default:
      return +firstNum + +secondNum;
  }
};

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');
  let correctAnswersLeft = 3;

  while (correctAnswersLeft > 0) {
    const firstNum = getRandomInt();
    const secondNum = getRandomInt();
    const operation = getRandomElement(operations);

    const expression = `${firstNum} ${operation} ${secondNum}`;
    const result = getExpressionResult(expression);

    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (+answer !== +result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
    correctAnswersLeft -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default calc;

calc();

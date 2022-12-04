import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

// Задача игры
const description = 'Find the greatest common divisor of given numbers.';

// Получение верного ответа
function getGcd(firstNumber, secondNumber) {
  let a = 0;
  let b = 0;
  let divisor = firstNumber > secondNumber ? secondNumber : firstNumber;

  while (divisor > 0) {
    a = firstNumber % divisor;
    b = secondNumber % divisor;
    if (a === 0 && b === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
}

// Создание массива с вопросами и ответами.
function getQuestAndAnswer() {
  const questAndAnswer = [];
  let firstNumber = getRandomNumber(1, 50);
  let secondNumber = getRandomNumber(1, 50);
  let question = `${firstNumber} ${secondNumber}`;
  let correctAnswer = `${getGcd(firstNumber, secondNumber)}`;

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

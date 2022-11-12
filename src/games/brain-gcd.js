import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

// Задача игры
const description = 'Find the greatest common divisor of given numbers.';

// Получение верного ответа
function getGcd(firstNumber, secondNumber) {
  let a = 0;
  let b = 0;
  let divisor = 0;
  if (firstNumber > secondNumber) {
    divisor = Math.round(firstNumber / 2);
  } else {
    divisor = Math.round(secondNumber / 2);
  }

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
  let firstNumber = 0;
  let secondNumber = 0;
  let quest = '';
  let answer = '';
  const questAndAnswer = [];
  firstNumber = getRandomNumber(0, 100);
  secondNumber = getRandomNumber(0, 100);
  quest = `${firstNumber} ${secondNumber}`;
  answer = `${getGcd(firstNumber, secondNumber)}`;
  questAndAnswer.push([quest, answer]);

  return questAndAnswer;
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

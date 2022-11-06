import getRandomNumber from '../getRandomNumber.js';
import { countRounds } from '../index.js';

// Задача игры
export const taskOfGame = 'Find the greatest common divisor of given numbers.';

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
export function getQuestsAndAnswers() {
  let firstNumber = 0;
  let secondNumber = 0;
  let quest = '';
  let answer = '';
  const questsAndAnswers = [];
  for (let i = 0; i < countRounds; i += 1) {
    firstNumber = getRandomNumber(0, 100);
    secondNumber = getRandomNumber(0, 100);
    quest = `${firstNumber} ${secondNumber}`;
    answer = `${getGcd(firstNumber, secondNumber)}`;
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

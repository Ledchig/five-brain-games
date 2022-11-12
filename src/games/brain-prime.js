import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

// Задача игры
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".ind the greatest common divisor of given numbers.';

// Проверка на простое число.
function isTheNumberPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Получаем массив вопросов и ответов.
function getQuestAndAnswer() {
  let quest = 0;
  let answer = '';
  const questAndAnswer = [];

  quest = getRandomNumber(0, 100);
  answer = isTheNumberPrime(quest) ? 'yes' : 'no';
  questAndAnswer.push([quest, answer]);
  return questAndAnswer;
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

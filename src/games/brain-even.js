import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

// Задача игры.
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на четность.
function isEven(number) {
  return number % 2 === 0;
}

// Генерируем массив вопросов и ответов.
function getQuestAndAnswer() {
  let quest = 0;
  let answer = '';
  const questAndAnswer = [];
  quest = getRandomNumber(0, 1000);
  answer = isEven(quest) ? 'yes' : 'no';
  questAndAnswer.push(quest, answer);

  return questAndAnswer;
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

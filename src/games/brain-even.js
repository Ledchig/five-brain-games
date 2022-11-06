import getRandomNumber from "../getRandomNumber.js";

// Задача игры.
export const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на четность.
function checkEvenNumber(number) {
  return number % 2 === 0;
}

// Генерируем массив вопросов и ответов.
export function getQuestsAndAnswers() {
  let quest = 0;
  let answer = '';
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    quest = getRandomNumber(0, 1000);
    answer = checkEvenNumber(quest) ? 'yes' : 'no';
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

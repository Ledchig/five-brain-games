import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

// Задача игры.
const description = 'What number is missing in the progression?';

// Создание массива с прогрессией.
function getArrayForQuest() {
  const arrayForQuest = [];
  const step = getRandomNumber(1, 10);
  // Первое число.
  let x = getRandomNumber(0, 10);
  // Создаем массив для вопросов.
  for (let e = 0; e < 10; e += 1) {
    arrayForQuest.push(x);
    x += step;
  }
  return arrayForQuest;
}

// Получаем ответы и вопросы.
function getQuestAndAnswer() {
  const questAndAnswer = [];
  const arrayForQuest = getArrayForQuest();
  let quest = '';
  let answer = '';
  // Определяем какое число прячем и записываем его в ответ.
  let numOfElementIsHide = getRandomNumber(0, arrayForQuest.length);
  if (numOfElementIsHide === 0 || numOfElementIsHide === 1) {
    numOfElementIsHide += 2;
  }
  const step = arrayForQuest[1] - arrayForQuest[0];
  answer = `${arrayForQuest[numOfElementIsHide - 1] + step}`;
  arrayForQuest[numOfElementIsHide] = '..';
  // Превращаем его в строку для вопроса.
  quest = `${arrayForQuest[0]}`;
  for (let a = 1; a < arrayForQuest.length; a += 1) {
    quest = `${quest} ${arrayForQuest[a]}`;
  }
  questAndAnswer.push([quest, answer]);

  return questAndAnswer;
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

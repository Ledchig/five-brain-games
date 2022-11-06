import getRandomNumber from "../getRandomNumber.js";

// Задача игры.
export const taskOfGame = 'What number is missing in the progression?';

// Получаем ответы и вопросы.
export function getQuestsAndAnswers() {
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const arrayForQuest = [];
    let quest = '';
    let answer = '';
    const step = getRandomNumber(0, 10);
    // Первое число.
    let x = getRandomNumber(0, 10);
    // Создаем массив для вопросов.
    for (let e = 0; e < 10; e += 1) {
      arrayForQuest.push(x);
      x += step;
    }
    // Определяем какое число прячем и записываем его в ответ.
    let numOfElementIsHide = getRandomNumber(0, 10);
    if (numOfElementIsHide === 0 || numOfElementIsHide === 1) {
      numOfElementIsHide += 2;
    }
    answer = `${arrayForQuest[numOfElementIsHide - 1] + step}`;
    arrayForQuest[numOfElementIsHide] = '..';
    // Превращаем его в строку для вопроса.
    quest = `${arrayForQuest[0]}`;
    for (let a = 1; a < 10; a += 1) {
      quest = `${quest} ${arrayForQuest[a]}`;
    }
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

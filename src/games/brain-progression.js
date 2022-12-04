import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

// Задача игры.
const description = 'What number is missing in the progression?';

// Создание массива с прогрессией.
function getProgression(firstNumber, step, progressionLength = 10) {
  const progression = [firstNumber];
  let nextNumber = firstNumber + step;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }
  return progression;
}

// Получаем ответы и вопросы.
function getQuestAndAnswer() {
  const progression = getProgression(getRandomNumber(0, 50), getRandomNumber(3, 15));
  // Определяем какое число прячем и записываем его в ответ.
  let numOfElementIsHide = getRandomNumber(0, progression.length);
  if (numOfElementIsHide === 0 || numOfElementIsHide === 1) {
    numOfElementIsHide += 2;
  }
  const step = progression[1] - progression[0];
  const correctAnswer = `${progression[numOfElementIsHide - 1] + step}`;
  progression[numOfElementIsHide] = '..';
  // Превращаем его в строку для вопроса.
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

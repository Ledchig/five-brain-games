import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

// Задача игры.
const description = 'What number is missing in the progression?';
const progressionLength = 10;

// Создание массива с прогрессией.
function getProgression(firstNumber, step) {
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
  const startNum = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 9);
  const progression = getProgression(startNum, step);
  const randomIndex = getRandomNumber(0, 9);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

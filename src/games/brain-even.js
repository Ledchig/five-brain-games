#!/usr/bin/env node
import brainGame from '../src/index.js';

// Задача игры.
const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на четность.
function checkEvenNumber(number) {
  return number % 2 === 0;
}
// Генерация случайного числа.
function getRandomNum() {
  return Math.round(Math.random() * 100);
}

// Генерируем массив вопросов и ответов.
function getQuestsAndAnswers() {
  let quest = 0;
  let answer = '';
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    quest = getRandomNum();
    answer = checkEvenNumber(quest) ? 'yes' : 'no';
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

brainGame(taskOfGame, getQuestsAndAnswers());

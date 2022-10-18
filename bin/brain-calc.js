#!/usr/bin/env node
import brainGame from '../src/index.js';

// Задача игры.
const taskOfGame = 'What is the result of the expression?';

// Определяем массив с возможными операциями.
const operations = ['+', '-', '*'];

// Получение случайной операции.
function getRandomOperations(arrayWithOperations) {
  const rand = Math.floor(Math.random() * arrayWithOperations.length);
  return operations[rand];
}

// Генерация случайного числа.
function getRandomNum() {
  return Math.round(Math.random() * 10);
}

// Логика получения верного ответа.
function solveExpression(expression) {
  let correctAnswer = 0;
  if (expression[1] === '+') {
    correctAnswer = Number(expression[0]) + Number(expression[2]);
    return correctAnswer.toString();
  } if (expression[1] === '-') {
    correctAnswer = Number(expression[0]) - Number(expression[2]);
    return correctAnswer.toString();
  }
  correctAnswer = Number(expression[0]) * Number(expression[2]);
  return correctAnswer.toString();
}

// Генерируем массив с вопросами и ответами.
function getQuestsAndAnswers() {
  let quest = '';
  let answer = '';
  let expression = [];
  const questsAndAnswers = [];
  for (let i = 0; 0 < 3; i += 1) {
    expression = [[getRandomNum()], [getRandomOperations(operations)], [getRandomNum()]];
    quest = `${expression[0]} ${expression[1]} ${expression[2]} = ?`;
    answer = solveExpression(expression);
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

brainGame(taskOfGame, getQuestsAndAnswers());

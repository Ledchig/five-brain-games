#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { letRandomNum, askQuestAndCheckAnswer } from './brain-even.js';

console.log('Welcome, to the   Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

// Определяем массив с возможными операциями.
const operations = ['+', '-', '*'];

// Получение случайной операции.
function letRandomOperations(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return operations[rand];
}

// Генерируем три выражения.
const expression1 = [letRandomNum(), letRandomOperations(operations), letRandomNum()];
const expression2 = [letRandomNum(), letRandomOperations(operations), letRandomNum()];
const expression3 = [letRandomNum(), letRandomOperations(operations), letRandomNum()];

// Преобразуем массив с выражением в строку для вопроса.
const quest1 = `${expression1[0]} ${expression1[1]} ${expression1[2]}`;
const quest2 = `${expression2[0]} ${expression2[1]} ${expression2[2]}`;
const quest3 = `${expression3[0]} ${expression3[1]} ${expression3[2]}`;

// Логика получения верного ответа.
function getCorrectAnswer(quest) {
  let correctAnswer = 0;
  if (quest[1] === '+') {
    correctAnswer = Number(quest[0]) + Number(quest[2]);
    return correctAnswer.toString();
  } if (quest[1] === '-') {
    correctAnswer = Number(quest[0]) - Number(quest[2]);
    return correctAnswer.toString();
  }
  correctAnswer = Number(quest[0]) * Number(quest[2]);
  return correctAnswer.toString();
}
// Получаем правильные ответы
const correctAnswer1 = getCorrectAnswer(expression1);
const correctAnswer2 = getCorrectAnswer(expression2);
const correctAnswer3 = getCorrectAnswer(expression3);

// создаем массив из вопросов и верных ответов.
const questsAndAnswers = [[quest1, correctAnswer1], [quest2, correctAnswer2],
  [quest3, correctAnswer3]];

askQuestAndCheckAnswer(questsAndAnswers);

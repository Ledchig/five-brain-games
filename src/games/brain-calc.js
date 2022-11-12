import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

// Задача игры.
const description = 'What is the result of the expression?';

// Определяем массив с возможными операциями.
const operations = ['+', '-', '*'];

// Получение случайной операции.
function getRandomOperation(arrayWithOperations) {
  const rand = Math.floor(Math.random() * arrayWithOperations.length);
  return operations[rand];
}

// Логика получения верного ответа.
function solveExpression(firstNumber, secondNumber, operation) {
  let correctAnswer = 0;
  switch (operation) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      return correctAnswer.toString();
    case '-':
      correctAnswer = firstNumber - secondNumber;
      return correctAnswer.toString();
    default:
      correctAnswer = firstNumber * secondNumber;
      return correctAnswer.toString();
  }
}

// Генерируем массив с вопросами и ответами.
function getQuestAndAnswer() {
  let quest = '';
  let answer = '';
  let firstNumber = 0;
  let secondNumber = 0;
  let operation = '';
  const questAndAnswer = [];
  firstNumber = getRandomNumber(0, 10);
  secondNumber = getRandomNumber(0, 10);
  operation = getRandomOperation(operations);
  quest = `${firstNumber} ${operation} ${secondNumber} = ?`;
  answer = solveExpression(firstNumber, secondNumber, operation);
  questAndAnswer.push(quest, answer);

  return questAndAnswer;
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};

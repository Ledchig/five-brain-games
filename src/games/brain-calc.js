import getRandomNumber from "../getRandomNumber.js";

// Задача игры.
export const taskOfGame = 'What is the result of the expression?';

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
export function getQuestsAndAnswers() {
  let quest = '';
  let answer = '';
  let firstNumber = 0;
  let secondNumber = 0;
  let operation = '';
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    firstNumber = getRandomNumber(0, 10);
    secondNumber = getRandomNumber(0, 10);
    operation = getRandomOperation(operations);
    quest = `${firstNumber} ${operation} ${secondNumber} = ?`;
    answer = solveExpression(firstNumber, secondNumber, operation);
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome, to the   Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Проверка на четность.
const checkEvenNumber = (number) => number % 2 === 0;
const letRandomNum = () => Math.round(Math.random() * 100);
let sumCorrectAnswer = 0;
// Генерируем три вопроса.
const quest1 = letRandomNum();
const quest2 = letRandomNum();
const quest3 = letRandomNum();
const correctAnswer1 = checkEvenNumber(quest1) ? 'yes' : 'no';
const correctAnswer2 = checkEvenNumber(quest2) ? 'yes' : 'no';
const correctAnswer3 = checkEvenNumber(quest3) ? 'yes' : 'no';
// Создаем массив с вопросами и верными ответами.
const arrayWithQuests = [[quest1, correctAnswer1], [quest2, correctAnswer2],
  [quest3, correctAnswer3]];
// Сравнение ответов.
const askQuestAndCheckAnswer = (questsAndCorrectAnswers) => {
  for (let i = 0; i < questsAndCorrectAnswers.length; i += 1) {
    console.log(`Question: ${questsAndCorrectAnswers[i][0]}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === questsAndCorrectAnswers[i][1]) {
      console.log('Correct!');
      sumCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questsAndCorrectAnswers[i][1]}.`);
      break;
    }
  }
  if (sumCorrectAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

askQuestAndCheckAnswer(arrayWithQuests);

export default askQuestAndCheckAnswer;

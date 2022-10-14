#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome, to the   Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Проверка на четность.
const evenNumber = (number) => number % 2 === 0;
let randomNum = 0;
let sumCorrectAnswer = 0;
// Логика игры на четность.
const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
  // получение случайного числа.
    randomNum = Math.round(Math.random() * 100);
    // вопрос и ввод игрока.
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = evenNumber(randomNum) ? 'yes' : 'no';
    // проверка ответа.
    if (answer === correctAnswer) {
      console.log('Correct!');
      sumCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      break;
    }
  }
  // проверяем счетчик верных ответов и поздравляем, либо предлогаем попытаться снова.
  return sumCorrectAnswer === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}`);
};
brainEven();
export default brainEven;

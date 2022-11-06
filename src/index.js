#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Количество раундов.
export const countRounds = 3;

export function brainGame(taskOfGame, questsAndAnswers) {
  console.log('Welcome, to the   Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  // Логика вопросов, получения ответов и их сравнение.
  // Счетчик верных ответов.
  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = questsAndAnswers[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

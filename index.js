#!/usr/bin/env node

import readlineSync from 'readline-sync';

function brainGame(taskOfGame, questsAndAnswers) {
  console.log('Welcome, to the   Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  // Логика вопросов, получения ответов и их сравнение.
  // Счетчик верных ответов.
  let sumCorrectAnswer = 0;
  for (let i = 0; i < questsAndAnswers.length; i += 1) {
    console.log(`Question: ${questsAndAnswers[i][0]}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === questsAndAnswers[i][1]) {
      console.log('Correct!');
      sumCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questsAndAnswers[i][1]}.`);
      break;
    }
  }
  if (sumCorrectAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default brainGame;

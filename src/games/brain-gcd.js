// Задача игры
export const taskOfGame = 'Find the greatest common divisor of given numbers.';

// Генерация случайного числа.
function getRandomNum() {
  return Math.round(Math.random() * 100);
}

// Получение верного ответа
function getAnswer(firstNumber, secondNumber) {
  let a = 0;
  let b = 0;
  let divisor = 0;
  if (firstNumber > secondNumber) {
    divisor = Math.round(firstNumber / 2);
  } else {
    divisor = Math.round(secondNumber / 2);
  }

  while (divisor > 0) {
    a = firstNumber % divisor;
    b = secondNumber % divisor;
    if (a === 0 && b === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
}

// Создание массива с вопросами и ответами.
export function getQuestsAndAnswers() {
  let firstNumber = 0;
  let secondNumber = 0;
  let quest = '';
  let answer = '';
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    firstNumber = getRandomNum();
    secondNumber = getRandomNum();
    quest = `${firstNumber} ${secondNumber}`;
    answer = `${getAnswer(firstNumber, secondNumber)}`;
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}

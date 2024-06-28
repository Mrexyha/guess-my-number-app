'use strict';

let score = 20;
let highscore = 0;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

let secretNum = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);

  if (!guess && score > 0) {
    displayMessage('No number!');
  } else if (guess === secretNum) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

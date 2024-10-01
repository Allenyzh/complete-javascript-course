'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(`New secretNumber: ${secretNumber}`);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('😒 No Number');

    // when player is win
  } else if (guess === secretNumber) {
    displayMessage('💖 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is higher
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🆙 Too High!' : '↘️ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤡 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Applies an input message string to the main message component
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Functionality for clicking the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');

    // Highlight winning number
    querySelector('.number').textContent = secretNumber;
    querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Set high score
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    // When player guesses incorrectly
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

      // Update score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Functionality for clicking the "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  // Generate new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  // Reset message and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset background-color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

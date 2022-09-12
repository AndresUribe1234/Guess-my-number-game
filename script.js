'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;

document
  .querySelector('.left-section button')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.outside-input input').value);
    console.log(guess);

    // When there no valid input to start the game
    if (!guess) {
      document.querySelector('.dinamic-message').textContent =
        'Please enter a valid option! ⚠️';
      document.querySelector('.nav-left-title').textContent = 'No valid input!';
      //   When player wins
    } else if (guess === secretNumber) {
      document.querySelector('.current-input').textContent = guess;
      document.querySelector('.dinamic-message').textContent = `You won!`;
      document.querySelector('.nav-left-title').textContent =
        'Congratulations! You won!';
      document.querySelector('body').style.backgroundColor = 'rgb(60, 189, 60)';
      // When player inputs a wrong number
    } else {
      document.querySelector('.current-input').textContent = guess;
      if (score > 0) {
        score = score - 1;
        document.querySelector('.current-score').textContent = score;
        if (guess < secretNumber) {
          document.querySelector(
            '.dinamic-message'
          ).textContent = `${guess} is too low! 👎 Enter another number! 🔢`;
        } else if (guess > secretNumber) {
          document.querySelector(
            '.dinamic-message'
          ).textContent = `${guess} is too high! 👎 Enter another number! 🔢`;
        }
        document.querySelector('.nav-left-title').textContent = 'Keep trying!';
      } else {
        document.querySelector(
          '.dinamic-message'
        ).textContent = `You lost the game! 💣`;
      }
    }
  });

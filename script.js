'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

// Input button
document
  .querySelector('.left-section button')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.outside-input input').value);
    console.log(guess);

    // When there no valid input to start the game
    if (!guess) {
      document.querySelector('.dinamic-message').textContent =
        'Please enter a valid option! ⚠️';
      //   When player wins
    } else if (guess === secretNumber) {
      document.querySelector('.current-input').textContent = guess;
      document.querySelector('.dinamic-message').textContent = `You won!`;
      document.querySelector('body').style.backgroundColor = 'rgb(60, 189, 60)';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.current-highscore').textContent = score;
      }
      // When player inputs a wrong number
    } else {
      document.querySelector('.current-input').textContent = guess;
      if (score > 0) {
        score = score - 1;
        document.querySelector('.current-score').textContent = score;
        if (guess < secretNumber) {
          document.querySelector(
            '.dinamic-message'
          ).textContent = `${guess} is too low!👎 Enter another number! #️⃣`;
        } else if (guess > secretNumber) {
          document.querySelector(
            '.dinamic-message'
          ).textContent = `${guess} is too high!👎 Enter another number! #️⃣`;
        }
      } else {
        document.querySelector(
          '.dinamic-message'
        ).textContent = `You lost the game! 💣`;
      }
    }
  });

//   Again button
document.querySelector('.play-again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.current-score').textContent = 20;
  document.querySelector('.current-input').textContent = '?';
  document.querySelector('.outside-input input').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.dinamic-message').textContent =
    '🎮 Enter a number to start the game!';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

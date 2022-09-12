'use strict';
/*
console.log(document.querySelector('nav .nav-left-container').textContent);

// document.querySelector('nav .nav-left-title').textContent =
//   'first web interaction! 🤖';

console.log(document.querySelector('nav .nav-left-container').textContent);

document.querySelector('.current-score').textContent = 18;
document.querySelector('.current-input').textContent = 18;

console.log(document.querySelector('.outside-input input').value);
document.querySelector('.outside-input input').value = 4;
console.log(document.querySelector('.outside-input input').value);
*/

document
  .querySelector('.left-section button')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.outside-input input').value);
    console.log(guess);
    if (!guess) {
      document.querySelector('.dinamic-message').textContent =
        'Please enter a valid option! ⚠️';
    }
  });

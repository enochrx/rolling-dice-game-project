'use strict';

//Selecting element by ID
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
rollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 1. A variable for the rolling dice function thus producing a number btw 1 - 6
  diceEl.classList.remove('hidden'); // to display the dice image
  diceEl.src = `dice-${dice}.png`; //displays the corresponding dice image number
  if (dice !== 1) {
    currentScore += dice; //add score to current score
    current0El.textContent = currentScore;
  } else {
    //switch players
  }
});

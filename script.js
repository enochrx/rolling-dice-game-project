'use strict';

//Selecting element by Classes & IDs
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

//refractoring
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); //toggle: a classlist method that adds a property if absent or removes it if present.
  player1El.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 1. A variable for the rolling dice function thus producing a number btw 1 - 6
  diceEl.classList.remove('hidden'); // to display the dice image
  diceEl.src = `dice-${dice}.png`; //displays the corresponding dice image number
  if (dice !== 1) {
    currentScore += dice; //add score to current score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //current0El.textContent = currentScore;
  } else {
    switchPlayer(); // called the function to switch players
  }
});

hold.addEventListener('click', function () {
  scores[activePlayer] += currentScore; // to add the current score for the active player
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  switchPlayer();

  if (scores[activePlayer] >= 20) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player');
  }
});

// script.js

// Your existing JavaScript code goes here
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection.toLowerCase()) {
      displayResult("It's a tie! Play again.");
  } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
      playerScore++;
      displayResult(`You Win! ${playerSelection} beats ${computerSelection}.`);
  } else {
      computerScore++;
      displayResult(`You Lose! ${computerSelection} beats ${playerSelection}.`);
  }

  updateScore();
  checkWinner();
}

function displayResult(message) {
  resultsDiv.textContent = message;
}

function updateScore() {
  scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
          displayResult("Congratulations! You win the game!");
      } else {
          displayResult("Sorry, you lose the game. Better luck next time!");
      }

      // Disable buttons after the game is finished
      btn.disabled = true;
      btn2.disabled = true;
      btn3.disabled = true;

      // Reset scores and enable buttons for a new game
      playerScore = 0;
      computerScore = 0;
      btn.disabled = false;
      btn2.disabled = false;
      btn3.disabled = false;
  }
}

// Event listeners for button clicks
btn.addEventListener('click', () => playRound('rock', getComputerChoice()));
btn2.addEventListener('click', () => playRound('paper', getComputerChoice()));
btn3.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() { 
    const choices = ['Rock', 'Paper', 'Scissors']; 
    const randomIndex = Math.floor(Math.random() * choices.length); 
    return choices[randomIndex]; 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    switch (computerSelection) {
      case 'Rock':
        if (playerSelection === 'scissors') {
          return "You Lose! Rock beats Scissors";
        } else {
          return "You Win! Paper beats Rock";
        }
      case 'Paper':
        if (playerSelection === 'rock') {
          return "You Lose! Paper beats Rock";
        } else {
          return "You Win! Scissors beats Paper";
        }
      case 'Scissors':
        if (playerSelection === 'paper') {
          return "You Lose! Scissors beats Paper";
        } else {
          return "You Win! Rock beats Scissors";
        }
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
      const computerSelection = getComputerChoice();
      console.log(`Player Selection: ${playerSelection}`);
      console.log(`Computer Selection: ${computerSelection}`);
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("You Win")) {
        playerScore++;
      } else if (roundResult.includes("You Lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You Win the Game!");
    } else if (playerScore < computerScore) {
      console.log("You Lose the Game!");
    } else {
      console.log("It's a Tie!");
    }
  }
  
  game();
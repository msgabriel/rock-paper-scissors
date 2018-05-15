const para = document.querySelector('.lead');
const user = document.querySelector('.user');
const computer = document.querySelector('.computer')
const reset = document.querySelector('.reset')
const buttons = document.querySelectorAll('.btn');
const score = document.querySelector('.score');

let computerSelection = '';
let playerSelection = '';
let round = 0;

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

buttons.forEach(choice => choice.addEventListener('click', playRound))

reset.addEventListener('click', startOver)

function startOver() {
  round = 0;
  computerScore = 0;
  playerScore = 0;
  para.textContent = 'pick rock paper or scissors'
  user.textContent = `user: ${playerScore}`
  computer.textContent = `computer: ${computerScore}`;
}


function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = this.id;
  if (round < 5) {
    if (computerSelection === 'rock' && playerSelection === 'paper'
      || computerSelection === 'paper' && playerSelection === 'scissors'
      || computerSelection === 'scissors' && playerSelection === 'rock') {
      playerScore++;
      ++round;
      para.textContent = `round ${round}: you win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      ++round;
      para.textContent = `round ${round}: it's a tie! you both played ${playerSelection}`;
    } else {
      computerScore++;
      ++round;
      para.textContent = `round ${round}: you lose! ${computerSelection} beats ${playerSelection}`;
    }
    // display the scores
    user.textContent = `user: ${playerScore}`
    computer.textContent = `computer: ${computerScore}`;

  } else if(round === 5){
    if (playerScore > computerScore) {
      ++round;
      para.textContent = `you won the game with a score of ${playerScore} vs ${computerScore}`
    } else if (playerScore < computerScore) {
      ++round;
      para.textContent = `you lost the game with a score of ${playerScore} vs ${computerScore}. Better luck next time!`
    } else {
      ++round;
      para.textContent = `It\'s a tie! You both scored ${playerScore}`
    }
  } else {
    startOver();
  }
}
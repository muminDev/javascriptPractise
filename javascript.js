let displayResult = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  }
// Adding eventListeners here for rock, paper and scissors buttons
  document.querySelector('.rock-button')
    .addEventListener('click', () => {
      pickUserMove('rock')
    });
  document.querySelector('.paper-button')
    .addEventListener('click', () => {
      pickUserMove('paper')
    });
  document.querySelector('.scissors-button')
    .addEventListener('click', () => {
      pickUserMove('scissors')
    });

function pickUserMove(userMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (userMove === 'rock'){
    if (computerMove === 'rock') {
      result = 'Tie !';
    } else if (computerMove === 'paper') {
      result = 'You lost !';
    } else {
      result = `You won !`
    }
  } 
    else if (userMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie !';
    } else if (computerMove === 'scissors') {
      result = 'You lost !';
    } else {
      result = 'You won !'
    }
  } 
    else if (userMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie !';
    } else if (computerMove === 'rock') {
      result = 'You lost !';
    } else {
      result = 'You won !'
    }
  }

  if (result === 'You won !') {
    displayResult.wins ++;
  } else if (result === 'You lost !') {
    displayResult.losses ++;
  } else if (result === 'Tie !') {
    displayResult.ties ++;
  }
  
  document.querySelector('.result').innerHTML = result
  document.querySelector('.choice').innerHTML = 
    `You <img src="emojies/${userMove}-emoji.png" 
    alt="emoji of ${userMove}"
    class="move-icon">
    <img src="emojies/${computerMove}-emoji.png" 
    alt="emoji of ${computerMove}"
    class="move-icon"> Computer`
  updateScoreElement();
  console.log(updateScoreElement());
  localStorage.setItem('score', JSON.stringify(displayResult))
}
    
function pickComputerMove() {
  let number = Math.random(); 
  let computerMove = ''
  if (number <= 1 / 3){
    computerMove ='rock';
  } else if (number <= 2 / 3) {
    computerMove = 'paper';
  } else{
    computerMove = 'scissors';
  }
  return computerMove;
};
// Adding eventListener for reset button
document.querySelector('.reset-button')
  .addEventListener('click', () => {
    resetButton();
  });
function resetButton() {
  displayResult.wins = 0;
  displayResult.losses = 0;
  displayResult.ties = 0;

  updateScoreElement();
  console.log(updateScoreElement());
  localStorage.removeItem('score');
}

function updateScoreElement() {
  document.querySelector('.general-score').innerHTML = `Your score ${displayResult.wins}.
  Computer's score ${displayResult.losses}.
  Ties ${displayResult.ties}` 
}

let isPlaying = false;
let intervalId;
let autoPlayValue = document.querySelector('.auto-play-button');
let butValue = autoPlayValue.innerHTML;

// Adding eventListener for AutoPlay button
document.querySelector('.auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });
function autoPlay() {
  if (!isPlaying && butValue === 'Auto Play') {
    autoPlayValue.innerHTML = 'Stop Play'
    intervalId = setInterval(
      function(){
        const computerMove = pickComputerMove()
        pickUserMove(computerMove);
      },
      1000);
    isPlaying = true;
  } else {
    autoPlayValue.innerHTML = 'Auto Play'
    clearInterval(intervalId);
    isPlaying = false;
  }
}
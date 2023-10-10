let displayResult = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

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
 
  localStorage.setItem('score', JSON.stringify(displayResult))
  
  document.querySelector('.result').innerHTML = result
  document.querySelector('.choice').innerHTML = `You choose ${userMove} --- Computer choose ${computerMove}`
  document.querySelector('.general-score').innerHTML = `Your score ${displayResult.wins}.
    Computer's score ${displayResult.losses}.
    Ties ${displayResult.ties}`
  
  console.log(`Computer shoose ${computerMove}.
You shoose ${userMove}. 
${result}`);

console.log(`Your score ${displayResult.wins}.
Computer's score ${displayResult.losses}.
Ties ${displayResult.ties}`)
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

function resetButton() {
  displayResult.wins = 0;
  displayResult.losses = 0;
  displayResult.ties = 0;
  document.querySelector('.general-score').innerHTML = `Your score ${displayResult.wins}.
    Computer's score ${displayResult.losses}.
    Ties ${displayResult.ties}`

  localStorage.removeItem('score');

  console.log(`Your score ${displayResult.wins}.
Computer's score ${displayResult.losses}.
Ties ${displayResult.ties}`)
}

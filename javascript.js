
function pickUserMove(userMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (userMove === 'rock'){
    if (computerMove === 'rock') {
      result = 'Tie !';
    } else if (computerMove === 'paper') {
      result = 'You lost !';
    } else {
      result = `You won. Good job !`
    }
  } 
    else if (userMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie !';
    } else if (computerMove === 'scissors') {
      result = 'You lost !';
    } else {
      result = 'You won. Good job !'
    }
  } 
    else if (userMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie !';
    } else if (computerMove === 'rock') {
      result = 'You lost !';
    } else {
      result = 'You won. Good job !'
    }
  }

  console.log(`Computer shoose ${computerMove}.
You shoose ${userMove}. 
${result}`)
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


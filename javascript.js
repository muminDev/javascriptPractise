
function rock() {
  let number = Math.random(); 
  let computerMove = ''
  if (number <= 1 / 3){
    computerMove ='rock';
  } else if (number <= 2 / 3) {
    computerMove = 'paper';
  } else{
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = 'Tie !';
  } else if (computerMove === 'paper') {
    result = 'You lost !';
  } else {
    result = 'You won. Good job !'
  }
  console.log(result);
};

function paper() {
  let number = Math.random(); 
  let computerMove = ''
  if (number <= 1 / 3){
    computerMove ='rock';
  } else if (number <= 2 / 3) {
    computerMove = 'paper';
  } else{
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'paper') {
    result = 'Tie !';
  } else if (computerMove === 'scissors') {
    result = 'You lost !';
  } else {
    result = 'You won. Good job !'
  }
  console.log(result);
};

function scissors() {
  let number = Math.random(); 
  let computerMove = ''
  if (number <= 1 / 3){
    computerMove ='rock';
  } else if (number <= 2 / 3) {
    computerMove = 'paper';
  } else{
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'scissors') {
    result = 'Tie !';
  } else if (computerMove === 'rock') {
    result = 'You lost !';
  } else {
    result = 'You won. Good job !'
  }
  console.log(result);
};

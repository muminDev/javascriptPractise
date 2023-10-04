/*
function rock() {
  let number = 0;

  number += Math.random();
  console.log(number);

  if (number = 0 || number < 1 / 3) {
    console.log('Rock');
  } else if (number = 1 / 3 || number < 2 / 3) {
    console.log('Paper');
  } else{
    console.log('Scissors');
  }
};
*/

function rock() {
  let number = Math.random();
  console.log(number);

  if (number <= 1 / 3) {
    console.log('Rock');
  } else if (number <= 2 / 3) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  }
}



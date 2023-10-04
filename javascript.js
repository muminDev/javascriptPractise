let cartQuant = 0;

function cartQuantity() {
  console.log(`Cart quantity: ${cartQuant }`);
   
};

function addCart() {
  console.log(`Cart quantity: ${cartQuant += 1}`);
};

function plusTwo() {
  console.log(`Cart quantity: ${cartQuant += 2}`)
};

function plusThree() {
  console.log(`Cart quantity: ${cartQuant += 3}`)
};

function reset() {
  console.log(`Cart quantity: ${cartQuant = 0}`)
};

let myName = 'Muminjon'
console.log(myName);

const coffee = 500;
const bagel = 300;
const soup = 900;

let cost = coffee + (bagel * 2) + soup;
console.log(`Cost of Food $${cost / 100}`);

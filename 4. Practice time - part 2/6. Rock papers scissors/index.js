let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
function roShamBo() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(roShamBo());
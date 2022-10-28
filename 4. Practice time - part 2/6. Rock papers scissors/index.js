let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
function roShamBo() {
  let randomIndex = Math.floor(Math.random() * 3) +1;
  return randomIndex;
}

console.log(roShamBo());
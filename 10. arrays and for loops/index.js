let hands = ["rock", "paper", "scissors"]; 

// create a function that returns a random item from array 

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log( getHand());
const playerGuess = 9;
const correctAnswer = 6;

// use ternary operator for this condition 
// let player know if their guess was too high, too low or right

const message = playerGuess < correctAnswer ? "Too low!" 
  : playerGuess > correctAnswer ? "Too high!"
  : "Exactly right!";
console.log(message)
// Try to modify expression so that we get range from 1 to 6
 let randomNumber = Math.floor( Math.random() * 6) + 1;
console.log(randomNumber);
// Create a function, rollDice(), that returns a random number between 1 and 6


function rollDice(){
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice())



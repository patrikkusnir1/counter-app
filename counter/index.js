// document.getElementById("count").innerText = 5;

// change the count-el in the HTML to reflect to new count

//camelCase
let countEl = document.getElementById("count-el"); // pass-in arguments

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}




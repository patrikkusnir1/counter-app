let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
  // how to keep spaces, if remove spaces from sentence?
  greetingEl.textContent += sentence[i] + " ";
}
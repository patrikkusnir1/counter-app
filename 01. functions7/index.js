// What are greeting and name? // parameters
// What are "Howdy" and "James"? // arguments
// What are num1 and num2? // parameters
// What are 3 and 4? // arguments

const welcomeEl = document.getElementById("welcome-el");
//                 parameters - inside the function
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 🔥`;
}
//        arguments - outside the function
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);

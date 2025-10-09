// reference html elements
const form = document.getElementById("form");
const numOneInput = document.getElementById("num1");
const numTwoInput = document.getElementById("num2");
const resultText = document.getElementById("result");

// form event listener
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // convert them to number function
  const numOneVal = Number(numOneInput.value); // cannot convert - NaN
  const numTwoVal = Number(numTwoInput.value);

  console.log(`numOneVal is of type: ${typeof numOneVal}, with value ${numOneVal}`)
  console.log(`numTwoVal is of type: ${typeof numTwoVal}, with value ${numTwoVal}`)

  // if we add 2 values, they concatinate, which is not we want. We need to convert them to numbers.
  resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`
})


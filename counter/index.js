let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  // change this to plus equal technique
  // count = count + 1;
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}




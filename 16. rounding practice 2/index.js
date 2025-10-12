// Challenge: 
// toFixed() method doesn't work - can you make it work?

const totalPrice = "420.69235632455";
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy: ${Number(totalPrice).toFixed(2)}`;
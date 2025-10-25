/* Price list 
* Coffee $2
* Sandwiches $5
* Salad $4
* Lemon Cake $3
*/

function selectItem(item) {
  // * item === "coffee"
  let price = 0;
  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "sandwiches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
    default: 
      return "Sorry we don't sell that item"; 
  }
  return `You selected ${item}. That will be $${price}.`
}

console.log(selectItem("lemon cake"))
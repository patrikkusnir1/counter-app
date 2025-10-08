const playerName = "Per";
let credits = 45;

credits = credits - 10;


// if possible, use const. If not, use let. 

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520 // const
const discount = 120 // const
let shippingCost = 12 // let
let shippingTime = "5-12 days" // let

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15 
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost // const

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
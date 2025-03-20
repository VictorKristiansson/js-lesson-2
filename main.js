// The user enters the price and the $ sign is removed
let userPrice = prompt("Enter the price $").replace("$", "");

// Converts the price string to a number
let priceNumber = parseFloat(userPrice);

// Prints the price before the discount
console.log("Price before discount = $" + priceNumber);

// Calculates the new price with a 10% discount
let discountedPrice = priceNumber * 0.9;

// Prints the discounted price, rounding to a maximum of two decimal
console.log("Your new price is: $" + discountedPrice.toFixed(2));
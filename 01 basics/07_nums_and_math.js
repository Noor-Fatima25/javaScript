const score = 400; // A basic number variable
// console.log(score);

const balance = new Number(100); // Creates a Number object
// console.log(balance);

// Convert the number to a string and get its length
// console.log(balance.toString().length);

// Format the number to one decimal place
// console.log(balance.toFixed(1));

const otherNumber = 123.8966; // A floating-point number

// Format the number with a specified precision (total digits)
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000; // A large number
// Format the number according to the PKR currency format
// Note: You can use 'en-PK' for regional formatting.
console.log(hundreds.toLocaleString('en-PK', { style: 'currency', currency: 'PKR' }));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math object provides many mathematical operations and constants
// console.log(Math);

// Returns the absolute value
// console.log(Math.abs(-4));

// Rounds to the nearest integer
// console.log(Math.round(4.6));

// Rounds up to the next integer
// console.log(Math.ceil(4.2));

// Rounds down to the previous integer
// console.log(Math.floor(4.9));

// Finds the smallest value
// console.log(Math.min(4, 3, 6, 8));

// Finds the largest value
// console.log(Math.max(4, 3, 6, 8));

// Generate a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Generate a random number between 1 and 10
console.log((Math.random() * 10) + 1);

// Generate a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10; // Minimum value
const max = 20; // Maximum value

// Generate a random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

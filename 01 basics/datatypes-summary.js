// Primitive Data Types
// JavaScript has 7 primitive types: String, Number, Boolean, null, undefined, Symbol, and BigInt

const score = 85; // Number: an integer
const scoreValue = 99.5; // Number: a floating-point value

const isLoggedIn = true; // Boolean: can be true or false
const outsideTemp = null; // null: represents the intentional absence of any object value
let userEmail; // undefined: variable declared but not assigned a value

const id = Symbol('userID'); 
const anotherId = Symbol('userID');

console.log(id === anotherId); // false: each Symbol is unique, even with the same description

const bigNumber = 12345678901234567890n; // BigInt: append 'n' to represent BigInt values

// Reference (Non-Primitive) Data Types
// Arrays, Objects, and Functions fall under this category and are mutable

const heros = ["ironman", "thor", "hulk"]; // Array: ordered collection of values
let myObj = {
    name: "Noor",
    age: 19,
};

const myFunction = function() {
    console.log("MEOW.!");
};

console.log(typeof anotherId); // typeof checks the type of a value; here it's "symbol"

// For more details on JavaScript data types, refer to the ECMA standard:
// https://262.ecma-international.org/5.1/#sec-11.4.3

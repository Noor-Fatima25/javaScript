const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Adding an array as an element to another array
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // marvel_heros now contains dc_heros as a nested array
// console.log(marvel_heros[3][1]); // Accessing "flash" from the nested array

// Concatenating two arrays
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // Merges both arrays into one

// Using the spread operator to merge arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); // Merges both arrays using spread syntax

// Nested array example
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening an array
const real_another_array = another_array.flat(Infinity); // Flattens the array completely
console.log(real_another_array); // Prints the fully flattened array

// Array utility methods
console.log(Array.isArray("Hitesh")); // Checks if the value is an array (false)
console.log(Array.from("Hitesh")); // Converts a string to an array of characters
console.log(Array.from({ name: "hitesh" })); // Converts an array-like object to an array (interesting result)

// Creating an array using `Array.of`
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates an array with the provided values

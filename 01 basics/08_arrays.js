// Arrays

const myArr = [0, 1, 2, 3, 4, 5]; // Standard array
const myHeors = ["shaktiman", "naagraj"]; // Array of strings

const myArr2 = new Array(1, 2, 3, 4); // Array created using the Array constructor
// console.log(myArr[1]); // Accessing the second element (index 1)

// Array methods

// myArr.push(6); // Adds 6 to the end of the array
// myArr.push(7); // Adds 7 to the end of the array
// myArr.pop(); // Removes the last element

// myArr.unshift(9); // Adds 9 to the beginning of the array
// myArr.shift(); // Removes the first element

// console.log(myArr.includes(9)); // Checks if 9 is in the array (returns true/false)
// console.log(myArr.indexOf(3)); // Returns the index of the first occurrence of 3

// const newArr = myArr.join(); // Joins all elements into a string, separated by commas

// console.log(myArr);
// console.log(newArr);

// Slice and Splice

console.log("A ", myArr); // Original array

const myn1 = myArr.slice(1, 3); // Extracts elements from index 1 to 3 (not including 3)
console.log(myn1); // New array with extracted elements
console.log("B ", myArr); // Original array remains unchanged

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1 and returns them
console.log("C ", myArr); // Original array is modified
console.log(myn2); // New array with removed elements

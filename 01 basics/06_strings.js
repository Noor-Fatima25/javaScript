const name = "larry"; // A string representing a name
const repoCount = 25; // A number representing the repository count

// Using template literals for string interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('evil-larry-game'); // Creating a string object

// String methods examples
console.log(gameName.charAt(2)); // Character at index 2
console.log(gameName.indexOf('o')); // First occurrence of 'o'

const newString = gameName.substring(0, 4); // Substring from index 0 to 4 (excluding 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Extracts part of the string using indices
console.log(anotherString);

const newStringOne = "   larry   "; // String with extra spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // Removes leading and trailing spaces

const url = "https://larry.com/larry%20evil"; // Example URL

console.log(url.replace('%20', '-')); // Replace '%20' with '-'
console.log(url.includes('ooopygoopy')); // Check if 'ooopygoopy' exists in the URL

console.log(gameName.split('-')); // Split the string into an array using '-'

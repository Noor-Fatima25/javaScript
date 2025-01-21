// Comparison operators examples

// Basic numerical comparisons
console.log(2 > 1);
console.log(2 >= 1); 
console.log(2 < 1); 
console.log(2 == 1); 
console.log(2 != 1);

// Comparisons involving strings and type coercion
console.log("2" > 1); // true: "2" is coerced to a number and compared
console.log("02" > 1); // true: "02" is coerced to 2 and compared

// Equality and comparison behave differently with null
// null is converted to a number (0) in numerical comparisons
console.log(null > 0); // false: null is treated as 0, so 0 > 0 is false
console.log(null == 0); // false: null is not equal to 0
console.log(null >= 0); // true: null is treated as 0, so 0 >= 0 is true

// Undefined behaves differently in comparisons
console.log(undefined == 0); // false: undefined is not equal to 0
console.log(undefined > 0); // false: undefined cannot be converted to a valid number
console.log(undefined < 0); // false: undefined cannot be converted to a valid number

// Strict equality (===) checks both value and type
console.log("2" === 2); // false: "2" (string) is not
let score = "noor"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // converting score to number here
// console.log(typeof valueInNumber);   // number
// console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "nonos"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "nonos" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "noor"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);

// tricky conversions
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

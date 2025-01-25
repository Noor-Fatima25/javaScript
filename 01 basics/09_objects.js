// Singleton object  
// Object.create()

// object creation using literals

const mySym = Symbol("key1"); // Creating a unique symbol

const JsUser = {
    name: "Noor",
    "full name": "Noor Fatima", // Property with a space in the name
    [mySym]: "beepbop", // Using a symbol as a key
    age: 18,
    location: "Lahore",
    email: "nono@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"], // Array as a property
};

// Accessing object properties
// console.log(JsUser.email); // Dot notation
// console.log(JsUser["email"]); // Bracket notation
// console.log(JsUser["full name"]); // Bracket notation for properties with spaces, we cannot access this key by using dot
// console.log(JsUser[mySym]); // Accessing property using a symbol key

// Modifying object properties
JsUser.email = "nono@yahoo.com"; // Updating email
// Object.freeze(JsUser); // Freezes the object to make it immutable(unchangeable)
JsUser.email = "nono@microsoft.com"; // No effect if the object is frozen
// console.log(JsUser);

// Adding methods to the object
JsUser.greeting = function () {
    console.log("Hello world!");
};
JsUser.greetingTwo = function () {
    console.log(`Hello,  ${this.name}`); // Using `this` to access object properties
};

// Calling methods
console.log(JsUser.greeting()); // Calls the first greeting method
console.log(JsUser.greetingTwo()); // Calls the second greeting method with dynamic content

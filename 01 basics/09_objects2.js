// Object creation using literals
const userProfile = {}; // Creating an empty object

// Adding properties to the object
userProfile.id = "123goose"; 
userProfile.name = "oopiegoopie";
userProfile.isLoggedIn = false; 

// Accessing properties
// console.log(userProfile);

// Nested objects
const detailedUser = {
    email: "some@gmail.com", // User's email address
    fullname: {
        userFullName: { // Nested object for the user's full name
            firstName: "meowbillah", // First name of the user
            lastName: "khan" // Last name of the user
        }
    }
};

// Accessing nested object properties
// console.log(detailedUser.fullname.userFullName.firstName);

const objectOne = { 1: "a", 2: "b" }; // Object with numeric keys
const objectTwo = { 3: "a", 4: "b" }; 
const objectThree = { 5: "a", 6: "b" };

// Merging objects using the spread operator
const mergedObject = { ...objectOne, ...objectTwo, ...objectThree };
// console.log(mergedObject);

// Array of user objects
const userList = [
    {
        id: 1,
        email: "nono1@gmail.com" // User email
    },
    {
        id: 2,
        email: "nono2@gmail.com" // Another user's email
    },
    {
        id: 3,
        email: "nono3@gmail.com" // Another user's email
    },
];

// Accessing properties of objects in an array
// console.log(userList[1].email); // Access the email of the second user

// Object utilities
// console.log(Object.keys(userProfile)); // Retrieve all keys of `userProfile`
// console.log(Object.values(userProfile)); // Retrieve all values of `userProfile`
// console.log(Object.entries(userProfile)); // Retrieve all key-value pairs of `userProfile`

// Check for the existence of a property
// console.log(userProfile.hasOwnProperty('isLoggedIn')); // Returns true if the property exists

// Object with destructuring
const courseDetails = {
    courseName: "JavaScript in Hindi", // Name of the course
    price: "999", // Price of the course
    courseInstructor: "Nono" // Instructor of the course
};

// Destructuring with renaming
const { courseInstructor: instructor } = courseDetails;

// console.log(instructor); // Access the instructor name using the destructured variable
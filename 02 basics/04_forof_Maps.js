// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); // This works because arrays are iterable with for...of
}

const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`); // This works because strings are iterable
}

// Maps

const map = new Map();
map.set('PK', "Pakistan");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('PK', "Pakistan"); // This won't create a duplicate because Map keys must be unique

// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value); // This works because Map is iterable with for...of
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// The following will throw an error because objects are not directly iterable with for...of
for (const [key, value] of myObject) {
    console.log(key, ':-', value); // ❌ error 
}


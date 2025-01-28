const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Using for...in for an object works because for...in iterates over enumerable properties of the object

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // print each key and its corresponding value from the object
}

const programming = ["js", "rb", "py", "java", "cpp"];

// Using for...in for an array works, but it iterates over the index, not the values
for (const key in programming) {
    console.log(programming[key]);  // print each element of the array, programming[key] accesses the value at the index
}


// for in loop doesn't work for maps either
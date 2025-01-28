const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val); // Prints each element in the coding array 
} )

coding.forEach( (item) => {
    console.log(item);   // Prints each element in the coding array using arrow function
} )

function printMe(item){
    console.log(item); 
}

coding.forEach(printMe) 

coding.forEach( (item, index, arr)=> {  //The forEach callback receives up to three arguments
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
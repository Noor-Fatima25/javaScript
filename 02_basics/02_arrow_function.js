const user = {
    username: "nono",
    price: 1000,

    welcomeMessage: function(){
        // console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // node refers to an empty global object bc there's no context, while in browser window object is the global object.. thus it's printed.

// function name(){
//     let username = "noorr"
//     console.log(this.username);
// }

// name()

// const name = function () {
//     let username = "noon"
//     console.log(this.username);
// }

const name =  () => {
    let username = "noon"
    console.log(this);
}


// name()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit returns
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "nonos"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
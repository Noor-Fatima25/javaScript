// Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs immediately after it is defined. It is enclosed in parentheses to make it a function expression, and then immediately invoked with `()` after the closing parenthesis.

// Purpose:
// IIFE helps in avoiding global scope pollution by creating a new scope. Any variables or functions declared inside an IIFE are not accessible outside it, keeping the global namespace clean.

    // named IIFE
(function db() {
    console.log("database connected");
})(); 

    // unnamed IIFE
((name) => {
    console.log(`database connected 2 ${name}`);
})("noon"); 


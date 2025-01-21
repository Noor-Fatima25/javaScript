const accountId = 8285789
let accountEmail = "nono@google.com"
var accountPassword = "12345"
accountCity = "Multan"
let accountState;

// accountId = 2 // not allowed


accountEmail = "non.com"
accountPassword = "643263"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})

// method chaining
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// reduce funx

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // 6

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "py course",
        price: 5400
    },
    {
        itemName: "mobile dev course",
        price: 5600
    },
    {
        itemName: "data science course",
        price: 82000
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
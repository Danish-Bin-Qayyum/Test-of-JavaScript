
/*const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 300, inStock: true }
];

// Find a product, then check if all in-stock products meet a price condition,
// and finally calculate the total price of all in-stock products.
const foundProduct = products.find(product => product.name === 'Keyboard');
console.log(foundProduct); // Output: { name: 'Keyboard', price: 75, inStock: true }

const allInStockExpensive = products
    .filter(product => product.inStock)
    .every(product => product.price > 50);
console.log(allInStockExpensive); // Output: false (because Mouse is not in stock, and Keyboard is not > 50)

const totalInStockPrice = products
    .filter(product => product.inStock)
    .reduce((total, product) => total + product.price, 0);
console.log(totalInStockPrice); // Output: 1575

const users = [
    { id: 1, name: 'Alice', age: 30, isActive: true },
    { id: 2, name: 'Bob', age: 24, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
    { id: 4, name: 'David', age: 28, isActive: true }
];

// 1. Filter active users.
// 2. Map to extract only their names.
// 3. Check if 'Alice' is among the active users (using some).
// 4. Find the first active user over 30.
// 5. Calculate the sum of ages of active users (using reduce).

const activeUserNames = users
    .filter(user => user.isActive)
    .map(user => user.name);
console.log(activeUserNames); // Output: ['Alice', 'Charlie', 'David']

const hasAliceActive = activeUserNames.some(name => name === 'Alice');
console.log(hasAliceActive); // Output: true

const firstActiveUserOver30 = users
    .filter(user => user.isActive)
    .find(user => user.age > 30);
console.log(firstActiveUserOver30); // Output: { id: 1, name: 'Alice', age: 30, isActive: true }

const sumOfActiveAges = users
    .filter(user => user.isActive)
    .reduce((sum, user) => sum + user.age, 0);
console.log(sumOfActiveAges); // Output: 93 (30 + 35 + 28)


const options = [
  { name: 'One', assigned: true }, 
  { name: 'Two', assigned: false }, 
  { name: 'Three', assigned: true }, 
];

const filtered = options
  .reduce((result, { name, assigned }) => assigned ? result.push(name) && result : result, []);

console.log(filtered);*/
const myArray = [10, 20, 30];
const myObject = { a: 1, b: 2, c: 3 };
const myString = "hello";

// for...of with an array
 for (const element of myArray) {
    console.log();
 }

// for...in with an object
for (let key in myObject) {
    console.log(key + ": " + myObject[key]); // Output: a: 1, b: 2, c: 3
}

// for...of with a string
for (let char of myString) {
    console.log(char); // Output: h, e, l, l, o
}
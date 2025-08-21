






const numbers = [10, 20, 30, 40];

console.log(numbers.includes(20));      // true
console.log(numbers.includes(100));     // false
console.log(numbers.includes(30, 2));   // false (starts checking at index 3)
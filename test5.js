/*
Q 1 )Write a code using map() to convert all city names in the array ['New York', 'London', 'Paris'] to uppercase.

Q 2 )Create a map() function to get the length of each word in the array ['apple', 'banana', 'cherry'].

Q 3 )Using filter(), create a function that filters out the numbers greater than 10 from the array [4, 15, 9, 20, 5].

Q 4 )Given an array of people with name and age (like the code you provided), use filter() to return a list of people who are 30 years or older.

Q 5 )Write a reduce() function that calculates the total age of people in this array:
const people = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Smith', age: 45}
];

Q 6 )Use map() to convert the array ['apple', 'banana', 'cherry'] into an array of objects, where each object contains the fruitName and its length.

Q 7 )Write a reduce() function that concatenates the names of the people into a single string separated by commas (e.g., "John, Jane, Smith").

Q 8 )Use filter() to extract all people from the array who are under 40 and sort the result alphabetically by their name.

Q 9 ) Use map() and filter() together to get the sum of the lengths of all words in the array ['dog', 'cat', 'elephant', 'mouse'], but only for words that have more than 3 characters.

Q 10)  Write a function that uses reduce() to find the oldest person in the list of people. You need to return the name of the oldest person. Example input:

const people = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 40},
  {name: 'Smith', age: 50}
];
*/ 

//Q 1 )Write a code using map() to convert all city names in the array ['New York', 'London', 'Paris'] to uppercase.
const  ar = ['new York', 'london', 'paris']
console.log(ar.map((e)=>e.toUpperCase()));//['NEW YORK','LONDON','PAEIS']

//Q 2 )Create a map() function to get the length of each word in the array ['apple', 'banana', 'cherry'].
 let arr= ['dog', 'cat', 'elephant', 'mouse']
 console.log(arr.map((e)=>e.length)); // output [3,2,8,5]

//Q 3 )Using filter(), create a function that filters out the numbers greater than 10 from the array [4, 15, 9, 20, 5].
const a1 =[4, 15, 9, 20, 5]
console.log(a1.filter((e)=>e>10));//[15,20]

//Q 4 )Given an array of people with name and age (like the code you provided), use filter() to return a list of people who are 30 years or older.
const people = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 40},
  {name: 'Smith', age: 50}
];
console.log(people.filter((e)=>e.age>=30));//[{name: 'Jane', age: 40},{name: 'Smith', age: 50}]

//Q 5 )Write a reduce() function that calculates the total age of people in this array:
const peop = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Smith', age: 45}
];
console.log( peop.reduce((acc, b)=>acc+b.age,0));//100

//Q 6 )Use map() to convert the array ['apple', 'banana', 'cherry'] into an array of objects, where each object contains the fruitName and its length.
let arrr= ['apple', 'banana', 'cherry'] 
console.log(arrr.map((e)=>{return `${e} : length of element ${e.length}`}));

 //Q 8 )Use filter() to extract all people from the array who are under 40 and sort the result alphabetically by their name.
const p = [
  {name: 'aohn', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Smith', age: 4},
  {name: 'gmith', age: 20},
  {name: 'Smith', age: 35},
  {name: 'imith', age: 38}
]
 let a = p.filter((e)=>e.age>40)
console.log(a.sort((a,b)=>a.name.localeCompare(b.name)));

//Q 9 ) Use map() and filter() together to get the sum of the lengths of all words in the array  ['dog', 'cat', 'elephant', 'mouse'], but only for words that have more than 3 characters.
let arrrr= ['dog', 'cat', 'elephant', 'mouse']
 let f9 = arrrr.map((e)=>e.length)
 let d9 = f9.filter((e)=>e>3)
console.log(d9.reduce((a,b)=>a+b));//13

//Q 10)  Write a function that uses reduce() to find the oldest person in the list of people. You need to return the name of the oldest person. Example input:
// ye ChatGPT ka code hai
function findOldestPersonName(people) {
  const oldest = people.reduce((oldestSoFar, currentPerson) => {
    return (currentPerson.age > oldestSoFar.age) ?  currentPerson : oldestSoFar;
  });
  return oldest.name;
}
// Example usage:
const people1 = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 40 },
  { name: 'Smith', age: 50 }
];
console.log(findOldestPersonName(people1)); // Output: "Smith"
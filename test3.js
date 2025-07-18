/*3	"""Check if all numbers in the array are greater than 0 using every() for the array:
const nums = [1, 5, 10, 20]; 
Find the first odd number in this array using find():

javascript
Copy
Edit
const arr = [2, 4, 8, 9, 10]; 
Check if the array contains the string """"banana"""" using some():
const fruits = ['apple', 'pear', 'banana', 'grapes']; 
Reverse the array and print it:
const items = ['pen', 'book', 'pencil', 'eraser']; 

Find the index of """"orange"""" in the array:

javascript
Copy
Edit

const fruits = ['apple', 'orange', 'banana', 'orange']; 

Find the last position of """"apple"""" in the array using lastIndexOf().
const items = ['apple', 'banana', 'apple', 'pear', 'apple']; 
Sort the array of strings and print the sorted array:
const gadgets = ['Macbook', 'iPhone', 'Samsung', 'Canon', '123Laptop']; 

Check if all numbers in the array are even using every(), and also check if at least one number is odd using some().
const nums = [2, 4, 6, 7, 8];
Find the first number greater than 50 in the array using find(), and return """"Not Found"""" if no such number exists. 

const arr = [10, 20, 30, 40, 45]; 

Reverse the array, then find the index of """"mango"""" in the reversed array:

const fruits = ['apple', 'banana', 'mango', 'pear', 'orange']; 
""
"*/ 

// Q 1 Find the first odd number in this array using find():
const nums = [2, 5, 10, 20]; 
let n =nums.find((e)=>e%2===1)
console.log(n);//5

// Q 2
//Check if the array contains the string """"banana"""" using some():
const fruits = ['apple', 'pear', 'banana', 'grapes'];
 let f = fruits.some((e)=>e==="banana")
 console.log(f);//true


 // Q 3 
 //Reverse the array and print it:
const items = ['pen', 'book', 'pencil', 'eraser']; 
console.log(items.reverse());//['eraser','pencil','book','pen']

// Q 4
//Find the index of """"orange"""" in the array:
const fruits1 = ['apple', 'orange', 'banana', 'orange'];
console.log(fruits1.indexOf('orange'));//1
// Q 5
//Find the last position of """"apple"""" in the array using lastIndexOf().
console.log(fruits1.lastIndexOf('apple'));

// Q 6
//Sort the array of strings and print the sorted array:
const gadgets = ['Macbook', 'iPhone', 'Samsung', 'Canon', '123Laptop']; 
console.log(gadgets.sort());//['123test','canon','imac','macbook','samsung']

// Q 7
const num = [2, 4, 6, 7, 8];
//Check if all numbers in the array are even using every(),
 let b = num.every((e) => e % 2 === 0);
 console.log(b);// false

 //at least one number is odd using some()
 let c = num.some((e) => e % 2 === 1);
 console.log(c);// true

 // Q 8
 //Find the first number greater than 50 in the array using find(), and return """"Not Found"""" if no such number exists.
  let j = [51]
  let k = j.find((e)=>{if (e>50) {console.log("greater then 50");} else {console.log("Not Found");}})
  console.log(k);

  // Q 9
  //Reverse the array, then find the index of """"mango"""" in the reversed array:
  const fruits2 = ['apple', 'banana', 'mango', 'pear', 'orange']; 
  let o=fruits2.reverse()
  let p=o.indexOf('mango')//
  console.log(o);//['orange','pear','mango','banana','apple']
  console.log(p);//2

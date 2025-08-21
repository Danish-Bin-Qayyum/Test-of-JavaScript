/*1. Map Function: Advanced Transformation
Given an array of city names, transform the city names to their respective lengths but only if the city name is more than 5 characters long. Implement this using the map function.

Example Input: ['LAHOR', 'KARACHI', 'FAISALABAD']
Example Output: [0, 7, 9]

2. Map Function: Complex String Transformation
You are given an array of words. Use the map function to return a new array where each word is transformed to its uppercase version but only if its length is greater than 3 characters.

Example Input: ['apple', 'banana', 'kiwi']
Example Output: ['APPLE', 'BANANA', 'kiwi']

3. Filter Function: Find Eligible People
From a list of people with age information, use the filter function to find and return all people who are eligible for a retirement plan, i.e., those who are 50 years or older.

Example Input: [ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ]
Example Output: [ {name: 'abe', age: 50} ]

4. Filter Function: Nested Filtering
Write a function that filters out people whose names start with a vowel and whose age is greater than 25. Use the filter method to accomplish this.

Example Input: [ {name:'aeon', age: 30}, {name:'cyx', age: 20}, {name:'ian', age: 30} ]
Example Output: [ {name: 'aeon', age: 30}, {name: 'ian', age: 30} ]

5. Reduce Function: Total Age Calculation
Using the reduce function, calculate the total age of all people in the array.

Example Input: [ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ]
Example Output: 120

6. Reduce Function: Concatenate Names
Write a function that concatenates all the names of the people in the array using reduce. The result should be a string containing all the names combined.

Example Input: [ {name:'abe'}, {name:'cyx'}, {name:'mpx'} ]
Example Output: 'abecyxmpx'

7. Reduce Function: Average Age
Using reduce, calculate the average age of all people in the array. Return a decimal value rounded to two decimal places.

Example Input: [ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ]
Example Output: 40.0

8. Map & Reduce: Word Length Calculation
Use map to transform an array of words into an array of word lengths. Then, use reduce to calculate the total length of all the words.

Example Input: ['animal', 'bird', 'human']
Example Output: 16

9. Filter & Map: Filter and Capitalize
Given an array of strings, use filter to keep only strings longer than 3 characters. Then, use map to return the uppercase version of those strings.

Example Input: ['dog', 'elephant', 'cat', 'bird']
Example Output: ['ELEPHANT', 'BIRD']

10. Map: Create Object with Index
Use the map function to transform an array into an object, where each word in the array is a key and its index in the array is the value.

Example Input: ['apple', 'banana', 'cherry']
Example Output: { apple: 0, banana: 1, cherry: 2 }

11. Filter: Remove Objects with Missing Key
Given an array of objects, use filter to remove objects that do not have the key age or have age as null or undefined.

Example Input: [ {name: 'John', age: 30}, {name: 'Alice'}, {name: 'Bob', age: null} ]
Example Output: [ {name: 'John', age: 30} ]

12. Map and Filter Combination: Filter and Modify
Given an array of numbers, first use filter to remove numbers less than 5. Then, use map to square the remaining numbers.

Example Input: [1, 2, 5, 7, 3, 8]
Example Output: [25, 49, 64]

13. Reduce: Flatten Nested Arrays
Write a function using reduce to flatten a nested array into a single array. The input can have arrays inside arrays of varying depths.

Example Input: [[1, 2], [3, 4], [5]]
Example Output: [1, 2, 3, 4, 5]

14. Reduce: Merge Arrays of Objects
Use reduce to merge multiple arrays of objects into one array, ensuring no duplicate objects based on a unique key (e.g., id).

Example Input:
javascript
Copy
[{id: 1, name: 'A'}, {id: 2, name: 'B'}]
[{id: 2, name: 'B'}, {id: 3, name: 'C'}]
Example Output:
javascript
Copy
[{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}]
15. Map, Filter, Reduce Combination: Calculate Total Length of Filtered Words
Given an array of strings, use filter to keep only words longer than 3 characters. Then, use map to transform each word into its length, and finally, use reduce to calculate the total length of all the filtered words.

Example Input: ['dog', 'elephant', 'cat', 'bird']
Example Output: 18*/

// Q 1 )Given an array of city names, transform the city names to their respective lengths but only if the city name is more than 5 characters long. Implement this using the map function.
console.log(a =['LAHOR', 'KARACHI', 'FAISALABAD'].map(c=>c.length).filter(d=>d>5));//[7,10]

// Q 2 )You are given an array of words. Use the map function
//  to return a new array where each word is transformed to its uppercase version
//  but only if its length is greater than 3 characters.
console.log(b=['lahore','karachi','faisaladab','cat','dog'].filter(b=>b.length>3).map(a=>a.toUpperCase()))//[6,7,10]

// Q 3 )From a list of people with age information, use the filter function to find
//  and return all people who are eligible for a retirement plan, i.e., those who are 50 years or older.
console.log(a=[ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ].filter(a=>a.age>=50));//[ {name: 'abe', age: 50} ]

// Q 4 )Write a function that filters out people whose names start with a vowel and whose age is greater than 25. Use the filter method to accomplish this.
const vowels = ['a', 'e', 'i', 'o', 'u']
let r= [ {name:'aeon', age: 30}, {name:'nyx', age: 20}, {name:'ian', age: 30} ]
.filter(a=>a.name && a.age>25).filter(n => {
  const initial = n.name.charAt(0) 
  return vowels.includes(initial)
});console.log(r) //[ {name: 'aeon', age: 30}, {name: 'ian', age: 30} ]

// Q 5 )Using the reduce function,
//  calculate the total age of all people in the array.
console.log(p=[ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ].reduce((acc, b)=>acc+b.age));//120);

// Q 6 )Write a function that concatenates all the names of the people in the array using reduce.
//  The result should be a string containing all the names combined.
console.log(o=[ {name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 30} ].reduce((acc,h)=>acc+h.name,""))//abecyxmpx

// Q 7 )Using reduce, calculate the average age of all people in the array. Return a decimal value rounded to two decimal places.
let w=[{name:'abe', age: 50}, {name:'cyx', age: 40}, {name:'mpx', age: 60} ] 
let x=w.reduce((sum, person) => sum + person.age, 0)
console.log(x/w.length);//50

// Q 8 )Use map to transform an array of words into an array of word lengths.
//  Then, use reduce to calculate the total length of all the words.
console.log(w=['animal', 'bird', 'human'].map(a=>a.length).reduce((acc,b)=>acc+b,0))//15

// Q 9 )Given an array of strings, use filter to keep only strings longer than 3 characters.
//  Then, use map to return the uppercase version of those strings.
console.log(b=['dog', 'elephant', 'cat', 'bird'].filter(b=>b.length>3).map(a=>a.toUpperCase()))//['ELEPHANT', 'BIRD']

// Q 10 )Use the map function to transform an array into an object,
//  where each word in the array is a key and its index in the array is the value.
console.log(a=['apple', 'banana', 'cherry'].map((a,b)=>{return `${a} : ${b}`}));//{ apple: 0, banana: 1, cherry: 2 }

// Q 11 )Given an array of objects, use filter to remove objects that do not have the key age or have age as null or undefined.
console.log(a=[ {name: 'John', age: 30}, {name: 'Alice'}, {name: 'Bob', age: null} ].filter((a)=>a.age));//[ {name: 'John', age: 30} ]

// Q 12 )Given an array of numbers, first use filter to remove numbers less than 5.
//  Then, use map to square the remaining numbers.
console.log(a=[1, 2, 5, 7, 3, 8].filter(a=>a>=5).map(a=>a**2));

// Q 13 )Write a function using reduce to flatten a nested array into a single array.
//  The input can have arrays inside arrays of varying depths.
console.log(f=[[1, 2], [3, 4], [5]].reduce((a, b)=>{return a.concat(b);}));//[1,2,3,4,5]

// Q 14 )Use reduce to merge multiple arrays of objects into one array,
//  ensuring no duplicate objects based on a unique key (e.g., id).
const array1 = [{ id: 1, name: 'John' },{ id: 2, name: 'Jane' }];
const array2 = [{ id: 2, name: 'Jane' },{ id: 3, name: 'Doe' }];
console.log(y = array1.concat(array2.filter( a=> !array1.some(b => b.id === a.id))));

// Q 15 )Given an array of strings,
//  use filter to keep only words longer than 3 characters.
//  Then, use map to transform each word into its length,
//  and finally, use reduce to calculate the total length of all the filtered words.
console.log(b= ['dog', 'elephant', 'cat', 'bird'].map(a=>a.length).filter(a=>a>3).reduce((a,b)=>a+b))//12

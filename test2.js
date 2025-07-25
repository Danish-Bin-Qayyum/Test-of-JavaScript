
/*2	"What does the every() method do in JavaScript arrays, and what does it return?

Which array method checks if at least one element in an array passes a test?

What does the find() method return if no element satisfies the condition?

What is the difference between indexOf() and lastIndexOf()?

What will be the output of the following code?
let fruits = ['apple', 'banana', 'mango', 'pear']; 
console.log(fruits.reverse()); 
In the example for lastIndexOf(), the code returns 1. Why is this result incorrect based on the array, and what should the correct code be to find the last occurrence of ""mango""?

What is the difference between find() and filter() when searching an array? Give an example using the total array from the file to explain.

What will be logged by the following code, and why?
let arr = ['macbook','imac','samsung','canon','123test']; 
console.log(arr.sort()); 
How can you use every() and some() together to check if all elements in an array are numbers and if any number is even? Write a code snippet.

Look at the following code and explain the output:

javascript
Copy
Edit
let nums = [2, 4, 6, 9, 11]; 
let result1 = nums.every((e) => e % 2 === 0); 
let result2 = nums.some((e) => e % 2 !== 0); 
console.log(result1, result2); 
"*/ 
//  Q 1 the every() check all the element and give answer in true and false
let a = [2,2,2,2,2,2]
 let b = a.every((e) => e % 2 === 0);
 console.log(b);// true

// Q 2 the find is the method which chect first one element which pass condition and return it

// Q 3 the will turn only first element if all the element satisfies condition
let c= [3,2,6,4,10,12]
 let h = c.find((e) => e % 2 === 0);
 console.log(h);// 2

 // Q 4 the difference between indexof and lastindex is
 // indexof: it check the element of array from index 1 to onword
 // lastindex : it check the element of array from last index to upword

 // Q 5
 // output is ['pear','mango','banana','apple']

 // Q 6
 //In the example for lastIndexOf() the code returns 1. because the lastindexof check the element from the last index to upword

 // Q 7
 // find(): it chect the the first element which pass the condition and return it 
 let e= [3,2,6,4,10,12]
 let f=a.find((e)=>e==2)
 console.log(b);// true

 // filter : filter method checke all the element and return those element which pass the condition

 let j= [3,2,6,4,10,12]
 let k=j.filter((e)=>e==2)
 console.log(k);// [2]

 // Q 8
 // because the sort method sort the element alphabeticaly
 let arr = ['macbook','imac','samsung','canon','123test']; 
console.log(arr.sort());//['123test','canon','imac','macbook','samsung']

// 9 
// the every method check all the element and give true but in this case it will false because all element is not satisfy the condition
// the some check those condition which satisfy the condition but in this case the output is true one element if satisfy the condition


// Q 10 
let nums = [2, 4, 6, 9, 11]; 
let result1 = nums.every((e) => e % 2 === 0); 
let result2 = nums.some((e) => e % 2 !== 0); 
console.log(result1); //false
console.log( result2);// true
/*4	"Write an arrow function named double that takes one number and returns its double. Call the function with value 6.

Create an arrow function called add that takes two arguments and returns their sum. Test it with values 10 and 15.

Write an arrow function greetUser that takes a username and age with default values ""Ali"" and 30. Return a greeting message using template literals.

Write an arrow function getFullName that returns a full name using the object below:
const person = { first: ""Sara"", second: ""Khan"" };
Use Math.max inside an arrow function findMax to return the highest of three numbers. Call the function with values 5, 10, 3.

Write an arrow function calculateTotal that uses rest parameters to accept any number of values and returns their sum starting from an initial value of 10. Try it with [1, 2, 3, 4].

Create an arrow function browserInfo that takes a default browser name and a rest parameter for other details. Log the browser name and the details array. Then test it with ""Firefox"", ""Version 115"", ""64-bit"".

Rewrite the following traditional function using arrow syntax and rest parameters:
function multiplyAll() {
  return Array.from(arguments).reduce((a, b) => a * b, 1);
}

Fix and improve the following code:
const userData = { name: ""John"", age: 30 };
const printData = () => ""Name: ${userData.name}, Age: ${userData.age}"";
console.log(printData());

Create an arrow function filterGreaterThan that takes a number and an array using rest parameters. Return only numbers greater than the first argument. Example input: (5, 1, 10, 4, 7), expected output: [10, 7]."*/

// Q 1 
//"Write an arrow function named double that takes one number and returns its double. Call the function with value 6.
let a = x=>x+x;
console.log(a(6));//12

// Q 2
//Create an arrow function called add that takes two arguments and returns their sum. Test it with values 10 and 15.
let b = (a,b)=>{return a+b}
console.log(b(10,15));//25

//  Q 3 
//Write an arrow function greetUser that takes a username and age with default values ""Ali"" and 30. Return a greeting message using template literals.
let c = (`user = "ali",age=30 return ${"wellcom ali"}`)
console.log(c);

// Q 4
//Write an arrow function getFullName that returns a full name using the object below:
let person = { first: "Sara", second: "Khan" };
let name1 =(person1)=>{return `${person1.first} ${person1.second}`}
console.log(name1(person));

// Q 4
//Use Math.max inside an arrow function findMax to return the highest of three numbers. Call the function with values 5, 10, 3.
 let j=(a,b,c)=>{  return Math.max(a,b,c)}
 console.log(j(5,10,3));//10

// Q 5
//Write an arrow function calculateTotal that uses rest parameters to accept any number of values and returns their sum starting from an initial value of 10. Try it with [1, 2, 3, 4].
 let  g = (...b)=>{ return Array.from(b).reduce((acc, b) => acc + b, 0);}
 console.log(g(1,2,3,4,5));//15
// Q 6
//Create an arrow function browserInfo that takes a default browser name and a rest parameter for other details. Log the browser name and the details array. Then test it with ""Firefox"", ""Version 115"", ""64-bit"".
 let f=(browser = "chrom",...detail)=>{console.log(browser);console.log(detail);}
 console.log(f());//chrom
 console.log(f("Firefox", "Version 115", "64-bit"));//("Version 115", "64-bit")

 // Q 7
 //Rewrite the following traditional function using arrow syntax and rest parameters:

function multiplyAll() {
  return Array.from(arguments).reduce((acc, b) => acc * b, 1);
}
console.log(multiplyAll(1,2,3,4,5));//120

























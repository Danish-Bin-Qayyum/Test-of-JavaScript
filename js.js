
 // Q. 1
/* it is an array inbuilt method which add the element at the end of the array*/
 let a = [1,2,3,4,5,6]
 console.log(a.push());//7

 // Q 2
 /* the shift method is use to remove the first element in array*/
  let arr= [1,2,3,4,5,6]
  console.log(arr.shift);//1

  // Q 3
  /*the lengh property of array gives the number of array present in a array*/
  let arrr = [1,2,3,4,5,6]
  console.log(arrr.length);//6

  // Q 4
  /* the includes method help us to find the specific element in array*/
  let arrrr = [1,2,3,4,5,6]
  console.log(arrr.includes(2))//true

  // Q 5 
  // the output is [1,2]
  // becouse the pop() method is a inbuilt array function in javascript which remove the element at the end of array*/

  // Q 6
  /* the splice() method is an inbuilt function in js which takes three argument  to start argument, numbers of element prints and delete element in array*/
   let  arrrrr = [1,2,3,4,5,6,7,8,9]
   console.log(arrrrr.splice(2,5,1,2));//[3,4,5,6,7]

// Q 7   output is (1) becouse the indexof method return the index of the element in array
// output is (fale) becouse the include method checke the element is present or not

// Q 8  diference between slice and splice method is
//  slice remove the element, takes stating element index and ending element intex and trun a array
//   the splice() method is an inbuilt function in js which takes three argument  to start argument, numbers of element prints and delete element in array
 let  arrrrrr = [1,2,3,4,5,6,7,8,9]
   console.log(arrrrrr.splice(2,5,1,2));//[3,4,5,6,7]
  console.log(arrrrrr.slice(2,5));//[1,2,8]

 // Q 9  foreach lop is not give an array because it work on the base of alterat and extract element ant return it
//  return the double value 
 let  arrrrrrr = [1,2,3,4,5,6,7,8,9]
 let n =arrrrrrr.map((e)=>e*2)
  console.log(n);






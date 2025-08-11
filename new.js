

//Q 9 ) Use map() and filter() together to get the sum of the lengths of all words in the array ??? ['dog', 'cat', 'elephant', 'mouse'], but only for words that have more than 3 characters.
let arrrr= ['dog', 'cat', 'elephant', 'mouse']
 let f9 = arrrr.map((e)=>e.length)
 let d9 = f9.filter((e)=>e>3)
console.log(d9.reduce((a,b)=>a+b));//13
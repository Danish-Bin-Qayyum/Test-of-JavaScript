

 //Q 8 )Use filter() to extract all people from the array who are under 40 and sort the result alphabetically by their name.
const p = [
  {name: 'aohn', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Smith', age: 4},
  {name: 'gmith', age: 20},
  {name: 'Smith', age: 35},
  {name: 'imith', age: 38}
]
 let a = p.filter(e=>{ e.age<40})
console.log(a.sort((a,b)=>a.name.localeCompare(b.name)));
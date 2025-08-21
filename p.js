// It is used to import collect.js library
const collect = require('collect.js');

const x= collect([10, 20, 30, 40, 50]);

x.transform((item, key) => item / 10);

console.log(x.all());
let s = "GeeksforGeeks";
const ans = s.split('')//.reverse().join('');
console.log(ans);
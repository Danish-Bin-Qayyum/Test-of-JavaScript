/*Even-Then-Double Sum (with holes & NaN)
Write sumEvenDoubles(arr) that: ignores sparse holes,
 filters only finite even numbers,
 doubles them with map,
 and returns their sum via reduce.
 check with every that all numbers used were even;if some weren’t, return 0.
  Use find to short-circuit if any NaN slips through.*/
//let arr =[1,"", , NaN, ,-2, ,3, 7,4,5]
//let arr =['LAHOR', 'KARACHI', 'FAISALABAD']
/*let arr=[0,-0,7,6,8]
 function EvenThenDoubleSum(arr) {
   if (arr.map(a=>typeof a).filter(a=>a).find(a=>a=="number")) {
    let b=arr.filter(a=>a).filter(a=>a%2==0).map(a=>a+a).reduce((a,b)=>a+b)
       console.log(b)
   } else {
     console.log("NaN");
   }
 }
 function sumEvenDoubles(arr) {
   let b=arr.filter(a=>a).filter(a=>a%2==0).map(a=>a+a).reduce((a,b)=>a+b)
   let c=arr.every((a)=>{if (!allumner) {
       console.log("true");
   } else {
     return 0
   }})
   let d=arr.find(a=>a===" ")
   console.log(d);
   console.log(b);//12
   console.log(c);//false
 }
 EvenThenDoubleSum(arr)
 sumEvenDoubles(arr)*/
/*
*- First Passing Transform
*- applyFirstPass(value, ...fns)
*- where each fn returns {ok:boolean, val:any}.
*- Use map to run all,
*- then find the first {ok:true} and return its val.
*- If none pass, reduce the error messages into one string.
*- Validate with some that at least one fn ran.
*/
  const ar =[
    {ok : true  , val : 1},
    {ok : false , val : 2},
    {ok : true  , val : 3},
    {ok : false , val : 4},
    {ok : true  , val : 5},
    {ok : false , val : 6}
  ]
  function transformUser(user) { return {...user,isActive: user.val> 0};}
  function applyFirstPass(value){
  let a=value.filter(a=>a.ok || !a.ok)
  console.log(a)}
  const users=applyFirstPass(ar.map(transformUser))
  /*const y=ar.find(user => user.ok === true)
  let g=[y].some(a)
  if (g.length === 0) {
  console.log(Error("none to be pass"));
} else {
  console.log(g);
}*/










function fetchuserData(userid,callback) { // delaring normal function 
    setTimeout(function()  { //  schedule the execution of a function or a piece of code after a specified delay
        const users = {  // just creating user variable
            1 : {id :1, name:"danisg" },
            2 : {id :2, name : "dom" }
        }
         const user = userid
    if (null,user) { // confused here ????
        
    } else {
        callback("user not fiund", null)
    }
    },2000);//

};
// callback function
function hunsleuserdata(error,userparams) {
    if (error) {
        console.error("error"+user);
        ;
    }else{
        console.log("user" );
    }
}
console.log(fetchuserData("danish",hunsleuserdata));
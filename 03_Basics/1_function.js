//functions is way of packaging certain block of code and reuse it


function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("J");
    
}
//sayMyName=>this is just reference, and sayMyName=>this is calling a function

// sayMyName()
//parameter
// function adding(n1,n2){
// console.log(n1+n2);
// }
// adding(2,4)=>argument
// const output=adding(4,5)//9
// console.log(output);//undefined


function adding(n1,n2){
// const result=n1+n2
return n1+n2
}
const output=adding(4,5)
// console.log(output);//9

function loginUserMessage(username="sam"){
    if (username===undefined){
        console.log("Please enter user name");
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pankaj"));

// console.log(loginUserMessage());//Undefined

// console.log(loginUserMessage());//default value "sam just logged in"


// function calculateCartPrice(num1){
// return num1
// }
// console.log(calculateCartPrice(1,2,3));//1


// function calculateCartPrice(...num1){
// return num1
// }
// console.log(calculateCartPrice(1,2,3));//[ 1, 2, 3 ] by use of spread operator


// function calculateCartPrice(val1,val2,...num1){
// return num1
// }
// console.log(calculateCartPrice(1,2,3))//[ 3 ] 1 will assign to val1 and 2 will assign to val2

//how to handle object in function

const user={
    username:"pankaj",
    id:"1234vn"
}
function handleObject(anyobject){
    return(`username is: ${anyobject.username} and userid is:${anyobject.id}`)
}
console.log(handleObject(user));//username is: pankaj and userid is:1234vn

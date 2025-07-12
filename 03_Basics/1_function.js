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

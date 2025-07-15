//we assume that the value is true for example
// const userEmail="panku@google.com"//(if here is empty string then will go to else block but if i provide empty list then it goes to if block, it is happening based on the truthy value and falsy value)
// if (userEmail){
//     console.log("got the user email");
    
// }else{
//     console.log("not got the email");
    
// }

//falsy value
//false,"",0,-0,BigInt 0n,null, undefined, Nan

//truthy value
//"0","false"," ",[], {}, function(){}(empty function)

//to check if array or object is empty

const userEmail=[]
if (userEmail.length===0){
    console.log("empty array");
    
}

const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("empty object");
    
}

//Nullish Coalescing Operator (??) null and undefined
let val1;
// val1=5 ?? 10 //5 when print will give 5
// val1=null??10 // 10
// val1=undefined??15 //15
val1=null??4??10 //4 the value which comes first
console.log(val1);

//terniary operator

//condition ? true:false

const price=100
price>=60 ? console.log("less than 60"):console.log("price more than 60");
;


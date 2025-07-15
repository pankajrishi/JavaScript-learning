//use for in for iteration over objects
// const myObj={
//     name:"Pankaj",
//     id:"1234xbbfi"
// }
// for (const key in myObj){
//     console.log(key,"=>",myObj[key]);
    
// }

const arr=[1,2,3,4] //for in gives the index
for(const nums in arr){
    console.log(nums)
}

//note Map is not iterable so we can't apply loop on this
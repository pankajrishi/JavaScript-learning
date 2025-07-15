const arr=[1,2,3,4]
// const arrVal=arr.forEach((items)=>{
// // console.log(items);//if it is commented

// })
// console.log(arrVal); //then this will print undefined

// const arrVal=arr.forEach((items)=>{
// console.log(items);
// return items //but forEach doesn't return anything

// })
// console.log(arrVal);

//use of filter
// const filteredArr=arr.filter((item)=>item>2)
// console.log(filteredArr);

// const filteredArr=arr.filter((item)=>{
//     return item>2})   //if there is curly brace then return key word should be there
// console.log(filteredArr);

//same using for each 
const filteredArray=[]
arr.forEach((items)=>{
if(items>2){
    filteredArray.push(items)
}
})
console.log(filteredArray);



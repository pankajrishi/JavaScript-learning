//for each loop

const arr=[1,2,3,4]

// arr.forEach(function(item){    //here we are not specifying the function name
//     console.log(item);
    
// })

//now using arrow function
// arr.forEach((items)=>{
//     console.log(items);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// arr.forEach(printMe)

// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

//object inside array

const myarr=[
    {
        languageName:"python",
        fileName:"py"
    },
    {
        languageName:"JavaScript",
        fileName:"js"
    },
    {
        languageName:"Java",
        fileName:"Java"
    }
]
myarr.forEach((items)=>{
console.log(items.languageName,"=>",items.fileName);

})
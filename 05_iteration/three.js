//for of loop

const arr=[1,2,3,4,"pankaj"]

for (const nums of arr){
    // console.log(nums);
    
}

//map=>remember the order and it has unique value

const map=new Map()
map.set("In","India")
map.set("Fr","France")
map.set("USA","America")
// console.log(map)
// Map(3) { 'In' => 'India', 'Fr' => 'France', 'USA' => 'America' }
// for (const key of map){
//     console.log(key);
// output
//[ 'In', 'India' ]
// [ 'Fr', 'France' ]
// [ 'USA', 'America' ]
    
// }

for (const [key,value] of map){
    // console.log(key, '=>', value)
}


//we can't apply for of for iterating object let see
const myObj={
    name:"Pankaj",
    id:"1234xbbfi"
}
for (const [key,value] of myObj){
    // console.log(key,value);//error:myObj is not iterable
    
}


//see in file four.js for other loop
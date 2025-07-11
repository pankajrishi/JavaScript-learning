const myArray=[0,1,2,3,4,5]
myArray.push(6) //append
myArray.pop() //remove from the back

// myArray.unshift(9) //append 9 at index 0
myArray.shift() //remove at index 0
// console.log(myArray);

// console.log(myArray.includes(9)); //true or false
// console.log(myArray.indexOf(9));//if it is not there then return -1

const newArr=myArray.join()//1,2,3,4,5 convert into the string


//slice and splice(briefly written in notebook)

// console.log("A", myArray)//A [ 1, 2, 3, 4, 5 ]

// console.log(myArray.slice(1,3));//[ 2, 3 ]

const arr=[10,20,30,40,50]
console.log(arr.splice(1,2)); //[ 20, 30 ]
console.log(arr); //[ 10, 40, 50 ] after splicing

console.log(arr.slice(1,2));//[ 40 ]






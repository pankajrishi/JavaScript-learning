//primitive: call by value means copy will be given

// 7 tpes: String,Number,null, Boolean, undefined,Symbol, Bigint

const score=100
const scoreValue=100.3

const isLoggedin=false
const outsideTemp=null

const id=Symbol("123")
const anotherId= Symbol("123")
// console.log(id==anotherId) //false


//NonPrimitive(Reference): value by reference

//Array,Object,Functions

const fruit=["apple","banana"]

let myObj={
    name:"Pankaj",
    age:20

}

const myFunctions=function(){
    // console.log("Hello world")
}


// *********Memory***********
//Stack(Primitive), Heap(Non-primitive)

let str1="pankaj"
let str2=str1
// str2="rishi"
// console.log(str1)//pankaj
// console.log(str2)//rishi


let userOne={
    email:"userone@gmail.com",
    upi:"user@ybl"

}

let userTwo=userOne
userTwo.email="pankaj@email.col"
console.log(userOne.email) //pankaj@email.col
console.log(userTwo.email)//pankaj@email.col
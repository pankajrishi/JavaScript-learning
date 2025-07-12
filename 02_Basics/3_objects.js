//singleton: when object declared through constructor
//but in the case of literal it is not singleton

//constructor: Object.create

//object literals
const mySym=Symbol("key1")

const myobj={
    name:"pankaj",
    "full name":"pankaj rishi",
    [mySym]:"symbolvalue",
    age:18,
    location:"Bihar",
    isloggedIn:false,
    lastLoggedIn:["mon","tue"]

}

// console.log(myobj.name);//pankaj
// console.log(myobj["full name"]);//pankaj rishi
// console.log(myobj.full name);//we can't access the value of this way when the key is inside " "
// console.log(myobj[mySym]); //symbolvalue

myobj.age=21//it change the value of age
// Object.freeze(myobj)
// myobj.age=22//now value will not be changed because object is freeze

//add greeting by making a function, so first we need to remove the freeze statement
myobj.greeting=function(){
    console.log("good morning");
    
}
myobj.greetingTwo=function(){
    console.log(`Good morning dear:, ${this.name}`);
    
}
// console.log(myobj.greetingTwo());
// console.log(myobj.greeting) //it print only the reference of the function but function is not executed in this case

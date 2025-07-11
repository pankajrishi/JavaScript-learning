let myDate=new Date()
// console.log(myDate)   //2025-07-11T11:44:55.419Z

// console.log(myDate.toString()) //Fri Jul 11 2025 11:46:05 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()) //Fri Jul 11 2025

// console.log(myDate.toISOString()) //2025-07-11T12:02:00.272Z

// console.log(myDate.toJSON()) //2025-07-11T12:03:25.155Z

// console.log(myDate.toLocaleDateString()) //7/11/2025

// console.log(myDate.toLocaleString()) //7/11/2025, 12:05:11 PM

// console.log(myDate.toLocaleTimeString()) //12:05:46 PM

// console.log(typeof myDate); //object


// const myCreatedDate=new Date(2025,0,12)
// console.log(myCreatedDate.toLocaleDateString());

// const myCreatedDate=new Date(2025,0,12,5,3)
// console.log(myCreatedDate.toLocaleString()) //1/12/2025, 5:03:00 AM

const myCreatedDate=new Date("2025-07-11")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now() //it is required for creating quiz to show the real time.

// console.log(myTimeStamp) //time in millisecond 
// console.log(myCreatedDate.getTime); //time in millisecond

// console.log(Math.floor(Date.now()/1000)); //time in second

let newDate= new Date()
// console.log(newDate)

console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday: "long"
})



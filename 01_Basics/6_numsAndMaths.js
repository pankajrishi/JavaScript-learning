const score=100
console.log(score)//100

const balance=new Number(100)//Number: 100

console.log(balance.toString().length)//3

console.log(balance.toFixed(2));//100.00

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))//23.9 it is used for roundoff

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


/***********Math********/

console.log(Math.abs(-4)); //4
console.log(Math.round(4.6))//5
console.log(Math.round(4.3))//4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))

console.log(Math.random())//0-1
console.log((Math.random()*10)+1)//min 1 but upto 9
console.log(Math.floor(Math.random()*10)+1)

//formula
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)



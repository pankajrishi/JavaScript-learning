const name="pankaj"
const repocount=10


// console.log(`hello my name is ${name} and my repocount is ${repocount}`)

const gameName=new String("pr-ak-ash")//another ways of declaring string

// console.log(gameName.__proto__) //{}
// console.log(gameName.charAt(2)) //n
// console.log(gameName.indexOf('n')) //2

const newString=gameName.substring(0,4); //if we give neg value then it also start from 0 only
// console.log(newString);
const anotherString=gameName.slice(-5,4)
// console.log(anotherString)

// const str1= "   pankaj  "
// console.log(str1)  //  pankaj  
// console.log(str1.trim());//pankaj (removes extra space)

const url="https://pankaj/%20rihsi"
console.log(url.replace('%20','_'));

console.log(url.includes('pankaj'));

console.log(gameName.split('-'));

// see more method of string from mdn or console







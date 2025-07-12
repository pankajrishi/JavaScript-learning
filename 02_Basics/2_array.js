// const arr1=[1,2,3,4]
// const arr2=[5,6]

// arr1.push(arr2)
// console.log(arr1) //[ 1, 2, 3, 4, [ 5, 6 ] ]

// arr1.concat(arr2)//please save in a varible

// const arr3=arr1.concat(arr2)
// console.log(arr3) //[ 1, 2, 3, 4, 5, 6 ]

// const spreadArr=[...arr1.arr1,...arr2] //3 dots is
// console.log(spreadArr);//[ 1, 2, 3, 4, 5, 6 ]


const randomArr=[1,2,[3,4,5,[6,7]]]
const realRandomArr=randomArr.flat(Infinity)
// console.log(realRandomArr);

// console.log(Array.isArray("Pankaj")); //false
// console.log(Array.from("Pankaj")); //[ 'P', 'a', 'n', 'k', 'a', 'j' ]
// console.log(Array.from({name:"pankaj"}));//[](we need to specify key or value for forming array)
// console.log(Object.values({name:"pankaj"}))//[ 'pankaj' ]
// console.log(Object.keys({name:"pankaj"})) //[ 'name' ]

let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]


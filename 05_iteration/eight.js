//reduce

const myNums=[1,2,3,4]
// const newNums=myNums.reduce(function(acc,curval){//acc:accumulator, 0=>initial value
//     return acc+curval
// },0)
// console.log(newNums);

// const newNums=myNums.reduce(function(acc,curval){//acc:accumulator, 0=>initial value
//     console.log(`acc:${acc} and currval ${curval}`);
    
//     return acc*curval
// },1)
// console.log(newNums);

const newNums=myNums.reduce((acc,curval)=>{//acc:accumulator, 0=>initial value
    return acc+curval
},0)
// console.log(newNums);

//task is to add all the price
const shoppingCart=[
    {
        itemName:"jeasn",
        price:499
    },
    {
        itemName:"T-shirt",
        price:399
    },
    {
        itemName:"Saree",
        price:699
    }
]

const totalPrice=shoppingCart.reduce((acc,itmeval)=>(acc+itmeval.price),0)
console.log(totalPrice);


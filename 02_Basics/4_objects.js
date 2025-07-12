// const tinderUser=new Object()//{} if we print tinderUser
const tinderUser={}//this also gives the {} when we print 

tinderUser.id="234avd"
tinderUser.name="sam"
tinderUser.isloggedin=false

// console.log(tinderUser);//{ id: '234avd', name: 'sam', isloggedin: false }

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
           firstname:"pankaj" ,
           lastname:"rishi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//pankaj


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3=Object.assign({},obj1,obj2)//{}=>this is source others are destination
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3={...obj1,...obj2} //this is mostly used for concate the object
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users=[
    {
        id:1,
        email:"someone@google.com"
        
    },
    {
        id:2,
        email:"sam@gmail.com"
    }
]

// console.log(users[1].email)//sam@gmail.com

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isloggedin' ]

// console.log(Object.values(tinderUser));//[ '234avd', 'sam', false ]

// console.log(Object.entries(tinderUser));//[ [ 'id', '234avd' ], [ 'name', 'sam' ], [ 'isloggedin', false ] ]

// console.log(tinderUser.hasOwnProperty('name'));//true

//destructuring:for making the code clean 

const course={
    name:"javaScript",
    instructor:"pankaj",
    price:0
}

// console.log(course.name)

// const {price}=course
// console.log(price)//0

// const {price:p}=course
// console.log(p)//0


//API


//json format of api:
//{
// "name":"pankaj",
// "age":20
// }

//api can also be in array format
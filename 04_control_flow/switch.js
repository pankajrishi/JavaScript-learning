//switch syntax
// switch(key){
//     case value:
//     break;
    
//     default:
//     break;
// }

const months=2
switch (months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("march");
        break;
        

    default:
        console.log("default value ");
        
        break;
}

//if we don't write break then if certain condition is matched then all of the below code will execute despite of the condition


//function
function addnum(num1,num2){   //parameterized function
    return num1 + num2;
}
console.log(addnum(5,7));

function add(a,b){
    let result = a + b;
    return result;
    //after return no code will be executed
}
console.log(add(10,20));

function userlogin(name){
    return `${name} user login`;
}
//console.log(userlogin("js"));
console.log(userlogin());  //when string is empty then undefined will be printed

function arr(...num){   //spread operator
    return num;
}
console.log(arr(1,2,3,4,5));  //array will be printed

const a = (n1) =>  //arrow function
{
    return n1;
}
console.log(a(10));

//this keyword story 
function user(){
   username = "Anjali";  
   console.log(this);  
}
user();

const arrowFunExp = () => {
    userName = "Anjali Rajendra Patil";
    console.log(this);   //cannot use this function because it gives empty set
}
arrowFunExp();
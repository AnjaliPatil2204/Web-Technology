//We can declare two types of object  : 1.obeject literal and 2.object singleton.
 
//1. Object literal :

let user = {
    name : "anjali", 
    age :20 ,
    email :"patilanjali220@gmail.com" ,
    city :"sangli",
    isLoggedIn : true ,
    lastLoginDays : ["monday","tuesday"],
    "full name" : "anjali patil"  //key with space must be in quotes
};
console.log(user);
console.log(user.email);
console.log(user.lastLoginDays);
console.log(user["full name"]);

user.email = "arpatil22@gmail.com";
console.log(user.email);

//Object.freeze(user);  //it will not allow to change existing key values or add new key value pair
user.email = "alexa22@gmail.com";
console.log(user.email);

//symbol example
const mysymbol = Symbol("22");
const myobj = {
    [mysymbol] : "anjali"
};
console.log(myobj);
console.log(typeof(myobj));
console.log(myobj[mysymbol]);  //to access symbol value use [] insted of .
//create one symbol add in object and print this symbol

user.greeting = function(){
    console.log("hello.js");
};
user.greeting();

user.greeting2 = function(){
    //string interpolation
    console.log(`Hello ${this.name}`);  
};
    









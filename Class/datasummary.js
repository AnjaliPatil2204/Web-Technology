/*
Memory :-
  - stack : primitive data type . whatever you can declare varibale it gives copy value.
     and heap : non - primitive it gives reference  original value

primitive datatype store in stack. when we assign one varible to another a copy is made.so changing one does not affect the other.
non-primitive data types store in heap memory. when we assign one object to another reference is copy not the value, so if we change one both varible are changes. 
*/

let myyoutubename = "ARP";
let newyoutubechannel = myyoutubename;
newyoutubechannel = "XYZ";   //updated value

console.log(myyoutubename);   //it print original value
console.log(newyoutubechannel);    //it print updated value

//heap example
let user1 = {
    email : "patilanjali2204@gmail.com",
    fname : "anjali",
    lname : "patil",
    id : 91  
};
let user2 = user1;
user2.email = "anja22@gmail.com";  //updated value
console.log(user1.email);   // it will give updated value
console.log(user2.email);


 
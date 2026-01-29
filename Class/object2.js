//singleton example
const user  = new Object();  //singletion object
console.log(user);
const user2 = {};  //non singleton object
user2.id = 123;
user2.name = "anjali";
user2.age = 20;
user2.city = "sangli";
user2.isLoggedIn = true;
console.log(user2);

//object inside the object
const regularuser = {
    email : "patilanjali2204@gmail.com",
    user : {
        fullname : {
            firstname : "anjali",
            lastname  : "patil"
        },
        }
};
console.log(regularuser);
console.log(regularuser.user.fullname.firstname);


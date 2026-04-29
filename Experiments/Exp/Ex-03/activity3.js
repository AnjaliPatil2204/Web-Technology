/*
activity 1- different btn arrow function and simple function
2. how we use this keyword in arrow function and simple function
3. write code for arraow function with 2 examples
4. write code for switch case
5. how to use truthy and falsy values in js
6. how to use ternary operators in js
7. write a code for how to use loop in array...all loops...for of,for in
8. different btn for of and for in
9. how to use map and filter function in js
10.how to use reduce function js.
*/

//1- different btn arrow function and simple function
//simple function
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Anjali"));
//arrow function
const greeting = (name) => {
    return "Hello " + name;
};
console.log(greeting("Anjali"));

//2. how we use this keyword in arrow function and simple function
//simple function
const person = {
    name: "Anjali",
    greet: function() {
        console.log(this.name);
    }
};
person.greet();  // Anjali
//arrow function
const person1 = {
    name: "Anjali",
    greet: () => {
        console.log(this.name);
    }
};
person.greet();  // undefined (because arrow does not have its own this)

//3. write code for arraow function with 2 examples
//example 1
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));  // 8
//example 2
const square = (x) => {
    return x * x;
};
console.log(square(4));  // 16

//4. write code for switch case
let day = 2;

switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}

//5. how to use truthy and falsy values in js
let value = 0; // falsy
if (value) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}
let value1 = "Hello"; // truthy
if (value1) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
} 

//6. how to use ternary operators in js
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

//7. write a code for how to use loop in array...all loops...for of,for in
//loops in array
let arr = [10, 20, 30, 40, 50];
console.log("For loop:");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//while loop
let arr1 = [1,2,3,4,5];
let j=0;
console.log("While loop:");
while(j<arr1.length){
    console.log(arr1[j]);
    j++;
}
//do while loop
let arr2 = [5,10,15,20,25];
let k=0;
console.log("Do while loop:");
do{
    console.log(arr2[k]);
    k++;
}while(k<arr2.length);

//8. different btn for of and for in
//for - of loop   --------> it is used to iterate over the values of an iterable object like array, string, etc.
let arr3 = [10, 20, 30];  //for array
console.log("For of loop:");
for (let value of arr3) {
  console.log(value);
}

for (let ch of "AI") {  //for string
  console.log(ch);
}

//for-in loop     ------> it is used to return the keys of an object or the indices of an array.
console.log("For in loop:");
let student = {
  name: "Anjali",
  branch: "CSE",
  year: 3
};

for (let key in student) {
  console.log(key, student[key]);
}

//9. how to use map and filter function in js
//map function
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // [1, 4, 9, 16, 25]
//filter function
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

//10.how to use reduce function js.
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // 15


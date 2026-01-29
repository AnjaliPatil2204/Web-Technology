let myarr = [0,1,2,3,4];
console.log(myarr);

let arr = [1,2,3,"a"];
console.log(arr);

const myar = new Array(0,1,2,3);
console.log(myar);    //check it 

let a = new Array(0,1,2,3,4);  // it will create empty array with 5 size
console.log(a[0]);

//array methods
myar.push(4);  //add value in array
console.log(myar);

console.log(myar.pop());  //remove last element from array

myar.unshift(9);
console.log(myar);//add element at the beginning

myar.shift();
console.log(myar); //remove first element

console.log(myar.includes(9));  //check element is present or not
console.log(myar.indexOf(3));  //print index of element
console.log(typeof(myar));  //object

const newar = myar.join();
console.log(newar);  //convert array to string
console.log(typeof(newar)); //string

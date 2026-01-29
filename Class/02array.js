let superheros = ["ironman","spiderman","thor","hulk"];
let a = ["shaktiman","capatain america","batman"];

superheros.push(a);
//console.log(superheros);

//console.log(superheros[3]);

//console.log(a[2]);

console.log(superheros.concat(a));  //merge two arrays

const arr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]];
const arr2 = arr.flat(Infinity);  //nested array to flat array
console.log(arr2);
const arr3 = arr.flat(1);
console.log(arr3);

console.log(Array.isArray("anjali"));  //check whether it is array or not . used for data scripting

// isArray used to ask question to array

console.log(Array.from("anjali"));  //convert to array
console.log(Array.from({name : "anjali"}));  //give empty aaray directly not convert in key values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));  //convert into one array

//what is string interpolation
//diffrence between null and undefined
//methods for number 




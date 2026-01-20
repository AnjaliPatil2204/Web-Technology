/*
•	Perform data type conversions
•	Practice converting:
o	String to Number
o	Number to String
o	Boolean conversions
o	Other possible conversions
*/
// 03conversion.js
// Data Type Conversions in JavaScript

// -------------------------------
// String to Number
// -------------------------------
let strNum = "123";
let strFloat = "45.6";

console.log(Number(strNum));      // 123
console.log(parseInt(strFloat));  // 45
console.log(parseFloat(strFloat));// 45.6

// -------------------------------
// Number to String
// -------------------------------
let num = 100;

console.log(String(num));     // "100"
console.log(num.toString());  // "100"

// -------------------------------
// Boolean Conversions
// -------------------------------
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("Hello"));// true

console.log(Number(true));    // 1
console.log(Number(false));   // 0

// -------------------------------
// Other Possible Conversions
// -------------------------------

// null and undefined
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// String + Number
console.log("5" + 2);  // "52" (string)
console.log("5" - 2);  // 3   (number)

// -------------------------------
// typeof check
// -------------------------------
console.log(typeof Number("10")); // number
console.log(typeof String(10));   // string
console.log(typeof Boolean(1));   // boolean

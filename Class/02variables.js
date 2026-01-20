
/*•Difference between var, let, and const   
***var***
 - Old way
 - Works inside a function
 - Can be changed and declared again
 - Can cause bugs → avoid using
*/
var x = 10;
x = 20;   // allowed

/*let
 - New way
 - Works inside { } (block)
 - Can be changed
 - Cannot be declared again
*/
let y = 10;
y = 20;   // allowed

/*const
 - New way
 - Works inside { } (block)
 - Cannot be changed
 - Cannot be declared again
*/
const z = 10;
//z = 20; not allowed


/*
•	Types of data:
o	Primitive
o	Non-Primitive
*/
/*
1. Primitive Data Types
    - Store single value
    - Immutable (cannot be changed)
    - Stored by value
Examples:
    - Number → 10, 3.14
    - String → "hello"
    - Boolean → true / false
    - Undefined
    - Null
    - BigInt
    - Symbol
*/
let a = 10;
let b = a;
b = 20;   // a stays 10

/*
2.Non-Primitive (Reference) Data Types
   - Store multiple values
   - Mutable (can be changed)
   - Stored by reference
Examples:
   - Object
   - Array
   - Function
*/
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);  // arr1 also changes


//•	Variable declaration:
//o	Declare variables of different data types
let num = 10;              // Number
let name = "Anjali";       // String
let isStudent = true;      // Boolean
let m;                     // Undefined
let n = null;              // Null
let arr = [1, 2, 3];       // Array (Non-Primitive)
let obj = { age: 20 };     // Object (Non-Primitive)

//o	Check their type using typeof
console.log(typeof num);        // number
console.log(typeof name);       // string
console.log(typeof isStudent);  // boolean
console.log(typeof m);          // undefined
console.log(typeof n);          // object
console.log(typeof arr);        // object
console.log(typeof obj);        // object

//•	Difference between null and undefined
/*
undefined
  - Variable is declared but no value is given
  - Set automatically by JavaScript
*/
let k;
console.log(k); // undefined
/*
null
  - Variable has no value intentionally
  - Set by the programmer
*/
let d = null;
console.log(d); // null

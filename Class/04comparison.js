// 04comparison.js
// Practice of Comparison Operators in JavaScript

// -------------------------------
// Equal (==) vs Strict Equal (===)
// -------------------------------

console.log(5 == "5");  
// true → because == checks only value, not data type

console.log(5 === "5"); 
// false → because === checks both value AND data type

// -------------------------------
// Not Equal (!=) vs Strict Not Equal (!==)
// -------------------------------

console.log(5 != "5");  
// false → values are same, type is ignored

console.log(5 !== "5"); 
// true → value is same but type is different

// -------------------------------
// Greater than (>) and Less than (<)
// -------------------------------

console.log(10 > 5);    
// true → 10 is greater than 5

console.log(10 < 5);    
// false → 10 is not less than 5

// -------------------------------
// Greater than or equal (>=)
// Less than or equal (<=)
// -------------------------------

console.log(10 >= 10);  
// true → value is equal

console.log(5 <= 3);    
// false → 5 is greater than 3

// -------------------------------
// Comparison with different data types
// -------------------------------

console.log("10" > 5);  
// true → "10" is converted to number 10

console.log("5" < 10);  
// true → "5" becomes number 5

// -------------------------------
// null and undefined comparisons
// -------------------------------

console.log(null == undefined);  
// true → special case in JavaScript

console.log(null === undefined); 
// false → different data types

console.log(null > 0);  
// false → null becomes 0, so 0 > 0 is false

console.log(null >= 0); 
// true → null becomes 0, and 0 >= 0 is true

// -------------------------------
// Boolean comparisons
// -------------------------------

console.log(true == 1);  
// true → true is converted to 1

console.log(false == 0); 
// true → false is converted to 0

console.log(true === 1); 
// false → different data types

// -------------------------------
// String comparisons
// -------------------------------

console.log("apple" > "banana");  
// false → compared alphabetically (dictionary order)

console.log("cat" < "dog");       
// true → 'c' comes before 'd'

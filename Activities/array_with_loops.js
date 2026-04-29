const fruits = ['apple', 'banana', 'mango', 'orange'];
//for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]}`);
}
//for...of loop-->it directly access the values of the array
console.log("Using for...of loop:");
for (const fruit of fruits) {
    console.log(`${fruit}`);
}
//for...in loop-->it access the index of the array and then values means if we pass index then we can access the value
console.log("Using for...in loop:");
for (const index in fruits) {
    console.log(`${fruits[index]}`);
}
//while loop
console.log("Using while loop:");
let count = 0;
while (count < fruits.length) {
    console.log(`${fruits[count]}`);
    count++;
}
//do...while loop
console.log("Using do...while loop:");
let j = 0;
do {
    console.log(`${fruits[j]}`);
    j++;
} while (j < fruits.length);

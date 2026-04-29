console.log("find lagest number in array:");
const arr = [3, 5, 7, 2, 8];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(`The largest number is ${largest}.`);
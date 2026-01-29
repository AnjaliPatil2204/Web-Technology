/*
1.array,function,object declaration.
2.write code for reverse number
3.check palindrome number
4.write code for fibonacci series
5.find largest element in array
6.remove duplicate element in array
7. find missing number in array
8.for string : reverse a string
9.count vowels in string
10.check palindromic in string
11.check prime ,factorial number 
12.write code for function evenodd
13.write code for sum of array
14.object 
*/
//1.array,function,object declaration.
document.write("Activity 1 : Array, Function, Object Declaration : ");
let arr = [1,2,3,4,5];
function sum(a,b){
    return a+b;
}
const obj = {
    name : "anjali",
    age  : 20
};
document.write(arr);
document.write(sum(5,10));
document.write(obj);

//2.write code for reverse number
document.write("<br>Activity 2 : Reverse Number : ");
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}
document.write(reverseNumber(12345));

//3.check palindrome number
document.write("<br>Activity 3 : Check Palindrome Number : ");
function isPalindromeNumber(num) {
    const originalNum = num;
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return originalNum === reversed;
}
document.write(isPalindromeNumber(121));

//4.write code for fibonacci series
document.write("<br>Activity 4 : Fibonacci Series : ");
function fibonacciSeries(n) {
    const series = [0, 1];  
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}
document.write(fibonacciSeries(10));

//5.find largest element in array
document.write("<br>Activity 5 : Find Largest Element in Array : ");
function findLargestElement(arr) {
    return Math.max(...arr);
}
document.write(findLargestElement([1, 3, 7, 0, 5]));

//6.remove duplicate element in array
document.write("<br>Activity 6 : Remove Duplicate Element in Array : ");
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
document.write(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//7. find missing number in array
document.write("<br>Activity 7 : Find Missing Number in Array : ");   
function findMissingNumber(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return total - sum;
}
document.write(findMissingNumber([1, 2, 4, 5], 5));

//8.for string : reverse a string
document.write("<br>Activity 8 : Reverse a String : ");
function reverseString(str) {
    return str.split('').reverse().join('');
}   
document.write(reverseString("anjali"));

//9.count vowels in string
document.write("<br>Activity 9 : Count Vowels in String : ");
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
document.write(countVowels("Anjali Patil"));

//10.check palindromic in string
document.write("<br>Activity 10 : Check Palindromic in String : ");
function isPalindromeString(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
document.write(isPalindromeString("madam"));

//11.check prime ,factorial number
document.write("<br>Activity 11 : Check Prime and Factorial Number : ");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
document.write(isPrime(7));
document.write(factorial(5));

//12.write code for function evenodd
document.write("<br>Activity 12 : Even or Odd Function : ");
function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
document.write(evenOdd(10));
document.write(evenOdd(7));

//13.write code for sum of array
document.write("<br>Activity 13 : Sum of Array : ");
//in simple way
function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
document.write(sumOfArray([1, 2, 3, 4, 5]));




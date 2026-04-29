//reverse no
let num=1234;
let reverse =0;
let rev1;
while(num != 0){
    rev1 = num % 10;
    reverse = reverse * 10 + rev1;
    num = parseInt(num /10);
    
}
console.log("Reversed number:"+reverse);
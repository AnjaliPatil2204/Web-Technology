//1.display student info ..string ,age
//2.odd even check
//3.print number using loop
//4.student pass or fails

//to print on browser we use documnet.write insted of console.log 

//Activity - 1 : Display Student info
document.write("Activity-1<br>")
let name = "ABC";
let age = 20;
let email = "abc22@gmail.com";

document.write("student name : ",name);
document.write("student age : ",age);
document.write("student email : ",email);

//Activity-2 : odd-even number
document.write("<br>Activity-2<br>")
let num = 22;
if(num % 2 ==0){
    document.write("Number is even");
  }
else{
    document.write("Number is odd");
}

//Activity-3 : print number using loop
document.write("<br>Activity-3<br>")
let a = 1;
while(a<10){
    document.write(a);
    a++;
}

//Activity-4 : Student pass or Fail
document.write("<br>Activity-4<br>");
let sub1 = 80;
let sub2 = 60;
let sub3 = 50;
avg = (sub1 + sub2 + sub3) / 3;
document.write(avg);
if(avg>35){
    document.write("<br>Student is pass");
}
else{
    document.write("<br>Student is fail");
}

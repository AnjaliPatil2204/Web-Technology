let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(mydate.getFullYear());

let mycreateddate = new Date(2026,1,21);
console.log(mycreateddate);
console.log(mycreateddate.toString());

let mycreateddate1 = new Date("01-21-2026");
console.log(mycreateddate1.toLocaleString());

let mytimestamp = Date.now(); 
console.log(mytimestamp);
console.log(Date.now()/1000);  //converting to seconds
console.log(mycreateddate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth());
console.log(newdate.getFullYear());
console.log(newdate.getUTCDate());

console.log(newdate.toLocaleString('default',{weekday : "long"}));   //give day name


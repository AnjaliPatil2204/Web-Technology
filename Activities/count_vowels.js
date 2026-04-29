let str ="Anjali";
let count =0;
for(let i=0;i<str.length;i++){
    if(str[i]=="A"||str[i]=="E"||str[i]=="O"||str[i]=="I"||str[i]=="U"){
        count++
    }
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        count++
    }
}
console.log(count);
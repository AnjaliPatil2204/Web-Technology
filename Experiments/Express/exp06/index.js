//MIddleware is a function that runs before sending a response.It can check data , log info , authenticator user.
//Create a basic web server using Express.js and demonstrate routing and middleware.
const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log('Data pass',new Date());
    next();     //next -- pass controll to the next function.k

})
app.get('/about',(req,res,next)=>{
    res.send('This is the about page');
    next();

});
app.get('/user',(req,res)=>{
    res.json({
        id : 1,
        name:'anjali',
        age:20
    });

});  

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

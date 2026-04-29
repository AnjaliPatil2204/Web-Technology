//Create dynamic routes in Express.js by passing data through URL parameters (e.g., /user/:id).
const express = require('express');
const app = express();
const port = 3002;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();  
});
const users = [
    {
        id:1,
        name: 'anjali',
        email: 'anjali@gmail.com'
    },
    {
        id:2,
        name: 'abc',
        email: 'abc@gmail.com'
    },
    {
        id:3,
        name: 'xyz',
        email: 'xyz@gmail.com'
    }
];

app.get('/users', (req, res,next) => {
    res.json(users);
    next();
});
app.get('/user/:id', (req, res,next) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Activities 1- build a small project by using user API - add user-post, get user-, update user-put, delete 
// Activity 2- user create log in api
const express = require('express'); 
const app = express();
app.use(express.json());

let users = [];
// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});
// Get all users
app.get('/users', (req, res) => {   
    res.json(users);
});
// Update a user
app.put('/users/:id', (req, res) => {   
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find(u => u.id === userId);
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }       
});
//delete user 
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: 'User deleted' });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
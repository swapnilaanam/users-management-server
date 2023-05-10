const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());

// data 
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Users Management server is running...');
});

app.get('/users', (req, res) => {
    res.send(users);
    console.log(users);
});

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});
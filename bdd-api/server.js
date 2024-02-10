const express = require('express');
const app = express();
const port = 3000;

// Simulated user data
let userData = {
    name: 'John Doe',
    age: 32,
    occupation: 'Developer',
};

app.get('/profile', (req, res) => {
    res.json(userData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
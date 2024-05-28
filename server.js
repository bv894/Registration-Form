const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// In-memory data store for registered users
const users = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// Registration route
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Store the user data
    const newUser = { username, email, password };
    users.push(newUser);

    res.status(200).json({ message: 'Registration successful' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
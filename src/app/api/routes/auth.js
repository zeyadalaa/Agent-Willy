const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Default route
router.get('/', (req, res) => {
    res.send('Welcome to my User Registration and Login API!');
});

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    console.log("Received data:", username, password, req.body);

    try {
        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token if needed
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

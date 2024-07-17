const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const sequelize = require('../db');
const User = require('../models/user');



exports.register = async (req, res) => {
    try {
        const { id,email, password,name,role } = req.body;

        // Check if user already exists
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            id,
            email, 
            password: hashedPassword,
            name,
            role,
           
        });

        res.status(201).json({ message: 'User registered successfully' }); 
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    // console.log({rows})
};
 
exports.login = async (req, res) => {
    try {  
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) { 
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}; 

exports.logout = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};
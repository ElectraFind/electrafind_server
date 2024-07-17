const User = require('../models/user');

// Register a new user
exports.register = async (req, res) => {
    try {
        console.log('inthe register')
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
        console.log('user saved')
    } catch (error) {
        res.status(400).send(error);
    }
};
// exports.signup = (req,res)=>{
//     try {
//         return await db.query('insert into admins (name ,location) values ('laki','kiri')');
//     } catch (error) {
//         console.log(error);
//     }
// }
// Login a user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
        }
        res.send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
};
  
// Logout a user
exports.logout = (req, res) => {
    try {
        // Implementation for logout logic (e.g., token invalidation)
        res.send({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).send(error);
    }
};

// add a user
exports.addUser = async (req, res) => {
    const { email, password, name, role } = req.body;

    try {
        const newUser = await User.create({
            email,
            password,
            name,
            role,
        });
        res.status(201).send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error adding user' });
    }
};
 
// Get all users
exports.getAllUsers = async (req, res) => { 
    try {
        console.log("getall users");
        const users = await User.findAll({});
        res.send(users);
    } catch (error) {
        res.status(500).send({message: 'error'});
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a user
// exports.deleteUser = async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) {
//             return res.status(404).send();
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id); // Find user by primary key
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        await user.destroy(); // Delete the user
        res.send({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ message: 'Error deleting user' });
    }
};
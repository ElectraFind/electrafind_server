const Admin = require('../models/admin');


exports.register = async (req, res) => {
    try {
        const { id,username,email, password} = req.body;

        // Check if user already exists
        let admin = await Admin.findOne({ where: { email } });
        if (admin) {
            return res.status(400).json({ message: 'admin already exists' });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        admin = await Admin.create({
            id,
            username, 
            password: hashedPassword,
            email,
           
        });

        res.status(201).json({ message: 'admin registered successfully' }); 
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    // console.log({rows})
};
// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send(admin);
        console.log("admin saved");
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll({});
        res.send(admins);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            return res.status(404).send();
        }
        res.send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an admin
exports.updateAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const [updated] = await Admin.update(req.body, {
            where: { id: adminId },
            returning: true, // This is important to get the updated record
            individualHooks: true // Run model validators
        });

        if (!updated) {
            return res.status(404).send({ error: 'Admin not found' });
        }

        const updatedAdmin = await Admin.findByPk(adminId);
        res.send(updatedAdmin);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        // Find the admin by primary key
        const admin = await Admin.findByPk(adminId);
        // If admin is not found, return 404
        if (!admin) {
            return res.status(404).send({ error: 'Admin not found' });
        }
        // Delete the admin
        await admin.destroy();
        // Send the deleted admin as response
        res.send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
};
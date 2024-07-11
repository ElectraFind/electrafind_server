const Admin = require('../models/Admin');

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.send(admins);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
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
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!admin) {
            return res.status(404).send();
        }
        res.send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).send();
        }
        res.send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
};

const Driver = require('../models/driver');

// Create a new driver
exports.createDriver = async (req, res) => {
    try {
        const driver = new Driver(req.body);
        await driver.save();
        res.status(201).send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find({});
        res.send(drivers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a driver by ID
exports.getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a driver
exports.updateDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a driver
exports.deleteDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndDelete(req.params.id);
        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch (error) {
        res.status(500).send(error);
    }
};

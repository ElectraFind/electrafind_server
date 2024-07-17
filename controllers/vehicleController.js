// const Vehicle = require('../models/vehicle');

// Create a new vehicle
exports.createVehicle = async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
    try {
        // const vehicles = await Vehicle.find({});
        res.send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a vehicle by ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).send();
        }
        res.send(vehicle);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a vehicle
exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!vehicle) {
            return res.status(404).send();
        }
        res.send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).send();
        }
        res.send(vehicle);
    } catch (error) {
        res.status(500).send(error);
    }
};

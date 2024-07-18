const Garage = require('../models/garage');

// Create a new garage
exports.createGarage = async (req, res) => {
    try {
        const garage = new Garage(req.body);
        await garage.save();
        res.status(201).send(garage);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all garages
exports.getAllGarages = async (req, res) => {
    try {
        const garages = await Garage.find({});
        res.send(garages);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a garage by ID
exports.getGarageById = async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id);
        if (!garage) {
            return res.status(404).send();
        }
        res.send(garage);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a garage
exports.updateGarage = async (req, res) => {
    try {
        const garage = await Garage.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!garage) {
            return res.status(404).send();
        }
        res.send(garage);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a garage
exports.deleteGarage = async (req, res) => {
    try {
        const garage = await Garage.findByIdAndDelete(req.params.id);
        if (!garage) {
            return res.status(404).send();
        }
        res.send(garage);
    } catch (error) {
        res.status(500).send(error);
    }
};

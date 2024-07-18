const StationHost = require('../models/stationHost');

// Create a new station host
exports.createStationHost = async (req, res) => {
    try {
        const stationHost = new StationHost(req.body);
        await stationHost.save();
        res.status(201).send(stationHost);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all station hosts
exports.getAllStationHosts = async (req, res) => {
    try {
        const stationHosts = await StationHost.find({});
        res.send(stationHosts);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a station host by ID
exports.getStationHostById = async (req, res) => {
    try {
        const stationHost = await StationHost.findById(req.params.id);
        if (!stationHost) {
            return res.status(404).send();
        }
        res.send(stationHost);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a station host
exports.updateStationHost = async (req, res) => {
    try {
        const stationHost = await StationHost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!stationHost) {
            return res.status(404).send();
        }
        res.send(stationHost);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a station host
exports.deleteStationHost = async (req, res) => {
    try {
        const stationHost = await StationHost.findByIdAndDelete(req.params.id);
        if (!stationHost) {
            return res.status(404).send();
        }
        res.send(stationHost);
    } catch (error) {
        res.status(500).send(error);
    }
};

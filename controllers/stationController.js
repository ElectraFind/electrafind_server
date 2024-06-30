const Station = require('../models/Station');

// Create a new station
exports.createStation = async (req, res) => {
    try {
        const station = new Station(req.body);
        await station.save();
        res.status(201).send(station);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all stations
exports.getAllStations = async (req, res) => {
    try {
        const stations = await Station.find({});
        res.send(stations);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a station by ID
exports.getStationById = async (req, res) => {
    try {
        const station = await Station.findById(req.params.id);
        if (!station) {
            return res.status(404).send();
        }
        res.send(station);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a station
exports.updateStation = async (req, res) => {
    try {
        const station = await Station.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!station) {
            return res.status(404).send();
        }
        res.send(station);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a station
exports.deleteStation = async (req, res) => {
    try {
        const station = await Station.findByIdAndDelete(req.params.id);
        if (!station) {
            return res.status(404).send();
        }
        res.send(station);
    } catch (error) {
        res.status(500).send(error);
    }
};

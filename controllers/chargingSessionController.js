const ChargingSession = require('../models/ChargingSession');

// Create a new charging session
exports.createChargingSession = async (req, res) => {
    try {
        const chargingSession = new ChargingSession(req.body);
        await chargingSession.save();
        res.status(201).send(chargingSession);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all charging sessions
exports.getAllChargingSessions = async (req, res) => {
    try {
        const chargingSessions = await ChargingSession.find({});
        res.send(chargingSessions);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a charging session by ID
exports.getChargingSessionById = async (req, res) => {
    try {
        const chargingSession = await ChargingSession.findById(req.params.id);
        if (!chargingSession) {
            return res.status(404).send();
        }
        res.send(chargingSession);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a charging session
exports.updateChargingSession = async (req, res) => {
    try {
        const chargingSession = await ChargingSession.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!chargingSession) {
            return res.status(404).send();
        }
        res.send(chargingSession);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a charging session
exports.deleteChargingSession = async (req, res) => {
    try {
        const chargingSession = await ChargingSession.findByIdAndDelete(req.params.id);
        if (!chargingSession) {
            return res.status(404).send();
        }
        res.send(chargingSession);
    } catch (error) {
        res.status(500).send(error);
    }
};

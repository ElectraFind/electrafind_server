const { ChargingStation, TimeSlot } = require('../models');

// Get all charging stations
exports.getAllStations = async (req, res) => {
  try {
    const stations = await ChargingStation.findAll({ include: TimeSlot });
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get station by ID
exports.getStationById = async (req, res) => {
  try {
    const station = await ChargingStation.findByPk(req.params.id, { include: TimeSlot });
    if (!station) return res.status(404).json({ message: 'Station not found' });
    res.json(station);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new station
exports.createStation = async (req, res) => {
  try {
    const newStation = await ChargingStation.create(req.body);
    res.status(201).json(newStation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a station
exports.updateStation = async (req, res) => {
  try {
    const updated = await ChargingStation.update(req.body, { where: { StationID: req.params.id } });
    res.json({ updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a station
exports.deleteStation = async (req, res) => {
  try {
    const deleted = await ChargingStation.destroy({ where: { StationID: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

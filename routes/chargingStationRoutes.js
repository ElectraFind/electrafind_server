const express = require('express');
const router = express.Router();
const chargingStationController = require('../controllers/chargingStationController');

router.get('/', chargingStationController.getAllStations);
router.get('/:id', chargingStationController.getStationById);
router.post('/', chargingStationController.createStation);
router.put('/:id', chargingStationController.updateStation);
router.delete('/:id', chargingStationController.deleteStation);

module.exports = router;

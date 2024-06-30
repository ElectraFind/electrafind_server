const express = require('express');
const router = express.Router();
const StationController = require('../controllers/stationController');

router.post('/', StationController.createStation);
router.get('/', StationController.getAllStations);
router.get('/:id', StationController.getStationById);
router.put('/:id', StationController.updateStation);
router.delete('/:id', StationController.deleteStation);

module.exports = router;

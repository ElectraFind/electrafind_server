const express = require('express');
const router = express.Router();
const StationHostController = require('../controllers/StationHostController');

router.post('/', StationHostController.createStationHost);
router.get('/', StationHostController.getAllStationHosts);
router.get('/:id', StationHostController.getStationHostById);
router.put('/:id', StationHostController.updateStationHost);
router.delete('/:id', StationHostController.deleteStationHost);

module.exports = router;

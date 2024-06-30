const express = require('express');
const router = express.Router();
const ChargingSessionController = require('../controllers/chargingSessionController');

router.post('/', ChargingSessionController.createChargingSession);
router.get('/', ChargingSessionController.getAllChargingSessions);
router.get('/:id', ChargingSessionController.getChargingSessionById);
router.put('/:id', ChargingSessionController.updateChargingSession);
router.delete('/:id', ChargingSessionController.deleteChargingSession);

module.exports = router;

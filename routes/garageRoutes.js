const express = require('express');
const router = express.Router();
const GarageController = require('../controllers/garageController');

router.post('/', GarageController.createGarage);
router.get('/', GarageController.getAllGarages);
router.get('/:id', GarageController.getGarageById);
router.put('/:id', GarageController.updateGarage);
router.delete('/:id', GarageController.deleteGarage);

module.exports = router;


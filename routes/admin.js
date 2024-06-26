const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

router.post('/', AdminController.createAdmin);
router.get('/', AdminController.getAllAdmins);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdmin);
router.delete('/:id', AdminController.deleteAdmin);

module.exports = router;

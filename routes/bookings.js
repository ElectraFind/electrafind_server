const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

router.post('/', BookingController.createBooking);
router.get('/', BookingController.getAllBookings);
router.get('/:id', BookingController.getBookingById);
router.put('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);

module.exports = router;

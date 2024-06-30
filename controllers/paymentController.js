const Payment = require('../models/Payment');

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).send(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({});
        res.send(payments);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a payment by ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).send();
        }
        res.send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a payment
exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!payment) {
            return res.status(404).send();
        }
        res.send(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) {
            return res.status(404).send();
        }
        res.send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
};

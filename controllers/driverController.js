const Driver = require('../models/driver');

// Create a new driver
exports.createDriver = async (req, res) => {
    try {
        const driver = new Driver(req.body);
        await driver.save();
        res.status(201).send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
    try {
        console.log('inthe drivers all details')
        const drivers = await Driver.findAll({});
        res.send(drivers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a driver by ID
exports.getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a driver
exports.updateDriver = async (req, res) => {
    try {
        const driverId = req.params.id;
        const [updated] = await Driver.update(req.body, {
            where: { id: driverId },
            returning: true, // This is important to get the updated record
            individualHooks: true // Run model validators
        });

        if (!updated) {
            return res.status(404).send({ error: 'Driver not found' });
        }

        const updatedDriver = await Driver.findByPk(driverId);
        res.send(updatedDriver);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a driver
// exports.deleteDriver = async (req, res) => {
//     try {
//         const driver = await Driver.findByIdAndDelete(req.params.id);
//         if (!driver) {
//             return res.status(404).send();
//         }
//         res.send(driver);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

exports.deleteDriver = async (req, res) => {
    try {
        const driverId = req.params.id;
        // Find the admin by primary key
        const driver = await Driver.findByPk(driverId);
        // If admin is not found, return 404
        if (!driver) {
            return res.status(404).send({ error: 'Driver not found' });
        }
        // Delete the admin
        await driver.destroy();
        // Send the deleted admin as response
        res.send(driver,message`deleted`);
    } catch (error) {
        res.status(500).send(error);
    }
};

// const express = require('express')
// const jwt = require('jsonwebtoken');
// const studentRoutes = require('./src/students/routes');
// const app = express()
// const port = 3001


// //middle ware
// app.use(express.json());

// //routes

// app.get('/',(req,res)=>{
//     res.send('hello node api')
// })
// // app.get('/blog',(req,res)=>{
// //     res.send('hello blog im lakindu')
// // })

// app.use('/api/v1/students', studentRoutes);

// app.listen(port, ()=>{
//     console.log(`node api app is running on port ${port}`)
// });





const express = require('express');
const app = express();
require('dotenv').config();
// const sequelize = require('./db');
// const models = require('./models'); 

const userRoutes = require('./routes/userRoutes');
// const driverRoutes = require('./routes/driverRoutes');
// const stationHostRoutes = require('./routes/stationHostRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const vehicleRoutes = require('./routes/vehicleRoutes');
// const stationRoutes = require('./routes/stationRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');
// const chargingSessionRoutes = require('./routes/chargingSessionRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
// const garageRoutes = require('./routes/garageRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
// const authRoutes = require('./routes/authRoutes');
// const { protect } = require('../middlewares/authMiddleware');

app.use(express.json());

// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/drivers', protect, driverRoutes);
// app.use('/api/station-hosts', protect, stationHostRoutes);
// app.use('/api/admins', protect, adminRoutes);
// app.use('/api/vehicles', protect, vehicleRoutes);
// app.use('/api/stations', protect, stationRoutes);
// app.use('/api/bookings', protect, bookingRoutes);
// app.use('/api/charging-sessions', protect, chargingSessionRoutes);
// app.use('/api/payments', protect, paymentRoutes);
// app.use('/api/garages', protect, garageRoutes);
// app.use('/api/notifications', protect, notificationRoutes);

// const PORT = process.env.PORT || 5000;
const port = 3001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const cors = require('cors');
// const express = require('express')
// const app = express()
// const {PORT}= require('../constants')
// // const sequelize = require('../models/index')

// app.use(express.json())

// // allow request from frontend
// app.use(cors({
//   origin: 'http://localhost:5500',
//   credentials: true
// }));

// //import routes

// const userRoutes = require('./routes/userRoutes');
// const vehicleRoutes = require('./routes/vehicleRoutes');
// const batteryRoutes = require('./routes/batteryRoutes');
// const chargingStationRoutes = require('./routes/chargingStationRoutes');
// // const driverRoutes = require('../routes/driverRoutes');
// // const stationHostRoutes = require('../routes/stationHostRoutes');
// // const adminRoutes = require('../routes/adminRoutes');
// // const vehicleRoutes = require('../routes/vehicleRoutes');
// // const stationRoutes = require('../routes/stationRoutes');
// // const bookingRoutes = require('../routes/bookingRoutes');
// // const chargingSessionRoutes = require('../routes/chargingSessionRoutes');
// // const paymentRoutes = require('../routes/paymentRoutes');
// // const garageRoutes = require('../routes/garageRoutes');
// // const authRoutes = require('../routes/authRoutes');
// // const { protect } = require('../middlewares/authmiddleware');
// // const { admin_protect } = require('../middlewares/authmiddleware_Admin');
// // const notificationRoutes = require('../routes/notificationRoutes');


// //initialize routes 
// app.use('/users', userRoutes);
// app.use('/vehicles', vehicleRoutes);
// app.use('/batteries', batteryRoutes);
// app.use('/chargingStations', chargingStationRoutes);

// //


// // app.use('/api/auth', authRoutes);
// // app.use('/api/admins', admin_protect, adminRoutes);
// app.use('/api/users',userRoutes);
// // app.use('/api/drivers', driverRoutes);
// // app.use('/api/station-hosts', stationHostRoutes);
// // app.use('/api/vehicles', protect, vehicleRoutes);
// // app.use('/api/stations', stationRoutes);
// // app.use('/api/bookings', protect, bookingRoutes);
// // app.use('/api/charging-sessions', protect, chargingSessionRoutes);
// // app.use('/api/payments', protect, paymentRoutes);
// // app.use('/api/garages', protect, garageRoutes);
// // app.use('/api/notifications', protect, notificationRoutes);

// // sequelize.sync({ force: false }) // Set to true only for development to reset database on every start
// //   .then(() => {
// //     console.log('Database & tables created!');
// //   });




const express = require('express');
const app = express();
const routes = require('../routes/index'); // Import the routes index file

// Middleware to parse JSON bodies
app.use(express.json());

// Base API route
app.use('/api', routes);

// Health check route (optional)
app.get('/', (req, res) => {
  res.send('Electric Vehicle Charging System API is running!');
});

// Error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 0;
const appStart = ()=>{
  console.log("e")
    try{
        app.listen(PORT,()=>{
            console.log(`the app is running at http://localhost:${PORT}`)
        })
    }catch(error){
        console.log(`error: ${error.message}`)
        
    }
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//app start 
appStart()








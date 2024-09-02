
const cors = require('cors');
const express = require('express')
const app = express()
const {PORT}= require('../constants')
const sequelize = require('../db')

app.use(express.json())

// allow request from frontend
app.use(cors({
  origin: 'http://localhost:5500',
  credentials: true
}));

//import routes

const userRoutes = require('../routes/userRoutes');
const driverRoutes = require('../routes/driverRoutes');
const stationHostRoutes = require('../routes/stationHostRoutes');
const adminRoutes = require('../routes/adminRoutes');
const vehicleRoutes = require('../routes/vehicleRoutes');
const stationRoutes = require('../routes/stationRoutes');
const bookingRoutes = require('../routes/bookingRoutes');
const chargingSessionRoutes = require('../routes/chargingSessionRoutes');
const paymentRoutes = require('../routes/paymentRoutes');
const garageRoutes = require('../routes/garageRoutes');
const authRoutes = require('../routes/authRoutes');
const { protect } = require('../middlewares/authmiddleware');
const { admin_protect } = require('../middlewares/authmiddleware_Admin');
// const notificationRoutes = require('../routes/notificationRoutes');


//initialize routes 

app.use('/api/auth', authRoutes);
app.use('/api/admins', admin_protect, adminRoutes);
app.use('/api/users',userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/station-hosts', stationHostRoutes);
app.use('/api/vehicles', protect, vehicleRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/bookings', protect, bookingRoutes);
app.use('/api/charging-sessions', protect, chargingSessionRoutes);
app.use('/api/payments', protect, paymentRoutes);
app.use('/api/garages', protect, garageRoutes);
// app.use('/api/notifications', protect, notificationRoutes);

sequelize.sync({ force: false }) // Set to true only for development to reset database on every start
  .then(() => {
    console.log('Database & tables created!');
  });


//app start 
const appStart = ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`the app is running at http://localhost:${PORT}`)
        })
    }catch(error){
        console.log(`error: ${error.message}`)
        
    }
}
appStart()








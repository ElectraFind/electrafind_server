const express = require('express')
const app = express()
const {PORT}= require('../constants')
const sequelize = require('../db')
// const models = require('../models')

app.use(express.json())

//import routes


const userRoutes = require('../routes/userRoutes');
const driverRoutes = require('../routes/driverRoutes');
const stationHostRoutes = require('../routes/stationHostRoutes');
const adminRoutes = require('../routes/adminRoutes');
const vehicleRoutes = require('../routes/vehicleRoutes');
const stationRoutes = require('../routes/stationRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const chargingSessionRoutes = require('../routes/chargingSessionRoutes');
const paymentRoutes = require('../routes/paymentRoutes');
const garageRoutes = require('../routes/garageRoutes');
const notificationRoutes = require('../routes/notificationRoutes');
const authRoutes = require('../routes/authRoutes');
const { protect } = require('../middlewares/authmiddleware');


//initialize routes

app.use('/api/auth', authRoutes);
app.use('/api/users', protect,userRoutes);
app.use('/api/drivers', protect, driverRoutes);
app.use('/api/station-hosts', protect, stationHostRoutes);
app.use('/api/admins', protect, adminRoutes);
app.use('/api/vehicles', protect, vehicleRoutes);
app.use('/api/stations', protect, stationRoutes);
app.use('/api/bookings', protect, bookingRoutes);
app.use('/api/charging-sessions', protect, chargingSessionRoutes);
app.use('/api/payments', protect, paymentRoutes);
app.use('/api/garages', protect, garageRoutes);
app.use('/api/notifications', protect, notificationRoutes);




// sequelize.sync({ force: false }) // Set to true only for development to reset database on every start
//   .then(() => {
//     console.log('Database & tables created!');
//   });


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








// app.get('/',(req,res)=>{
//         res.send('hello node api')
//     })  

// app.get('/blog',(req,res)=>{
//             res.send('hello e api')
//         })
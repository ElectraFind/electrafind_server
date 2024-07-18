const express = require('express')
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const cors = require('cors');
const app = express()
const {PORT}= require('../constants')
const sequelize = require('../db')
// const models = require('../models')(sequelize)

app.use(express.json())

// allow request from frontend
app.use(cors({
  origin: 'http://localhost:5500/'
}))

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
// const notificationRoutes = require('../routes/notificationRoutes');


//initialize routes 

app.use('/api/auth', authRoutes);
app.use('/api/users',protect,userRoutes);
app.use('/api/drivers', protect, driverRoutes);
app.use('/api/station-hosts', protect, stationHostRoutes);
app.use('/api/admins', protect, adminRoutes);
app.use('/api/vehicles', protect, vehicleRoutes);
app.use('/api/stations', protect, stationRoutes);
app.use('/api/bookings', protect, bookingRoutes);
app.use('/api/charging-sessions', protect, chargingSessionRoutes);
app.use('/api/payments', protect, paymentRoutes);
app.use('/api/garages', protect, garageRoutes);
// app.use('/api/notifications', protect, notificationRoutes);

// app.post('/login', async(req,res)=>{
//     const {email,password} = req.body;
//     try {
//         const user = await User.findOne({where: {email}});
//         if (!user){
//             return res.status(401).json({message:'invalid email or password'});
//         }
//         const isMatch = await bcrypt.compare(password,user.password);
    
//         if(!isMatch){
//             return res.status(401).json({message: 'invalid password'});
//         }
    
//         const token = jwt.sign({userId: users.id},process.env.JWT_SECRET,{expiresIn: '1h'});
//         res.json({token});
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message: 'server error'})
//     }
// })

// sequelize.sync();
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








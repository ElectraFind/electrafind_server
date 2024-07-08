const express = require('express')
const app = express()
const {PORT}= require('../constants')


app.use(express.json())
//import routes
// const users =require('../routes/authRoutes')
const authRoutes = require('../routes/authRoutes')
app.get('/',(req,res)=>{
        res.send('hello node api')
    })  

app.get('/blog',(req,res)=>{
            res.send('hello e api')
        })
//initialize routes
app.use('/api',authRoutes)

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
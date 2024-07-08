const db = require('../db')
const {hash}=require('bcryptjs')

exports.getUsers= async(req,res)=>{
    try {
        // --just to see how many rows
        console.log('in the getusers')
        const {rowCount} =await db.query('select * from users')
        console.log(rowCount)
    } catch (error) {
        console.log(error.message)
    }
}
exports.register=async(req,res)=>{
    const {email,password}=req.body
    try {
        const hashedpassword = await hash(password,10)
        await db.query('INSERT INTO users(email) VALUES( $1  )',[
            email,
           
        ])
        const {rowCount,rows} =await db.query('select * from users');
        console.log(rows);
        return res.status(201).json({
            success:true,
            data:rows,
            message:'registration successful',
            count:rowCount,
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            error:error.message,
        })
    }
}
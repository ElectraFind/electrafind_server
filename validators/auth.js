const {check}=require('express-validator')
const db =require('../db')

//password
const password = check ('password').isLength({min: 6, max:15})
    .withMessage('password has to be between 6 and 15 characters.')

//email
const email= check ('email').isEmail({})
    .withMessage('please provide a valid email')

const emailExists =check('email').custom(async(value)=>{
    const {rows}= await db.query('SELECT * FROM users WHERE email = $1',[
        value,
    ])
    if (rows.length){
        throw new Error('email already exists.')
    }
})

module.exports={
    registerValidation: [email,password,emailExists],
}
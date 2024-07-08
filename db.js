const {Pool} = require('pg');
// const {Sequelize} = require('sequelize');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "electrafind",
    password: "root",
    port: 5432,
});

pool.connect((err)=>{
    if(err){
        console.error('connection error', err.stack)
    }else{
        console.log('connected')
    }
});

module.exports = {
    query: (text,params)=> pool.query(text,params),
};

const {SERVER_URL}=require('./constants/index');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('electrafind','postgres','root', {
  host: 'localhost',
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging or set to console.log for debugging
});

sequelize.sync();
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize; 
 
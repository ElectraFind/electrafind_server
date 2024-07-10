
const {SERVER_URL}=require('./constants/index');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(SERVER_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging or set to console.log for debugging
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

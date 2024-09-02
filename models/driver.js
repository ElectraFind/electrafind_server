const { DataTypes } = require('sequelize');
const sequelize = require('../db');
// const User = require('../models/user');

const Driver = sequelize.define('drivers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
name: {
    type: DataTypes.STRING(100),
    allowNull: false
},
phone_number: {
    type: DataTypes.STRING(15),
    allowNull: false
},
address: {
    type: DataTypes.STRING(255),
    allowNull: false
},
city: {
    type: DataTypes.STRING(100),
    allowNull: false
},
license_number: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
},
created_at: {
    type: DataTypes.DATE,
    allowNull:false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), 
},
updated_at: {
    type: DataTypes.DATE,
    allowNull:false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
},
 {
tableName: 'drivers',
timestamps: false, // Enable Sequelize's automatic timestamp management
});

module.exports = Driver;

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Admin = sequelize.define('admins', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  }
}, {
  tableName: 'admins',
  timestamps: true,
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

module.exports = Admin;

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: true, 
  },
//   createdAt: {
//     type: DataTypes.DATE,
//     field: 'created_at',
//     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false,
// },
// updatedAt: {
//     type: DataTypes.DATE,
//     field: 'updated_at',
//     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false,
// },

}, {
  timestamps: false,
  tableName: 'users',
  // createdAt: 'created_at',
  // updatedAt: 'updated_at',
});

module.exports = User;

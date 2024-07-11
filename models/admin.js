const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Admin = sequelize.define('admins', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'users',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

module.exports = Admin;

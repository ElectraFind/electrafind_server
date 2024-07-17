const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Booking = sequelize.define('bookings', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  driverId: {
    type: DataTypes.UUID,
    references: {
      model: 'Drivers',
      key: 'id',
    },
  },
  stationId: {
    type: DataTypes.UUID,
    references: {
      model: 'Stations',
      key: 'id',
    },
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Booking;

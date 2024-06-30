const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ChargingSession = sequelize.define('ChargingSession', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  bookingId: {
    type: DataTypes.UUID,
    references: {
      model: 'Bookings',
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
  energyConsumed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = ChargingSession;
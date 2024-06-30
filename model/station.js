const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Station = sequelize.define('Station', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  stationHostId: {
    type: DataTypes.UUID,
    references: {
      model: 'StationHosts',
      key: 'id',
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Station;

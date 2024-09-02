const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Station = sequelize.define('stations', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  station_name: {
    type: DataTypes.UUID,
    allowNull: false,
    references:{
      model:'stationHost',
      key: 'company_name',
    },
  },
  stationHostId: {
    type: DataTypes.UUID,
    references: {
      model: 'StationHost',
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
  timestamps: false,
});

module.exports = Station;

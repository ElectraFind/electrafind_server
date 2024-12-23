const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const ChargingStation = sequelize.define('chargingstations', {
      StationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      HostUserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return ChargingStation;
  };
  
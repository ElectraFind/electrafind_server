const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const StationHost = sequelize.define('station_host', {
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
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    availability: {
        type: DataTypes.ENUM('available', 'unavailable', 'under repair'),
        allowNull: false 
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW
    // },
    // updated_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW
    // }
}, {
    tableName: 'station_host',
    timestamps: false, // Enable Sequelize's automatic timestamp management
    // underscored: true // This option makes Sequelize use snake_case for column names
});

module.exports = StationHost;

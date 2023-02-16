const {  DataTypes, Model  } = require('sequelize')
const  db   = require('../config/db')

const Workshop = db.define('workshop', {
        workshop_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    workshop_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workshop_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    workshop_hour: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Workshop;



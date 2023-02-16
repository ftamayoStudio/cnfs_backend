const {  DataTypes, Model  } = require('sequelize')
const  db  = require('../config/db')

const Establishment = db.define('establishment', {

    establishment_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    establishment_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    establishment_adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    establishment_city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    establishment_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    establishment_lat: {
        type: DataTypes.STRING,
    },
    establishment_lon: {
        type: DataTypes.STRING,
    }
})

module.exports = Establishment;



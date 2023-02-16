const {  DataTypes, Model  } = require('sequelize')
const db = require('../config/db')

const User = db.define('user', {
        user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_tel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_age: {
        type: DataTypes.INTEGER,
    },
    user_email: {
        type: DataTypes.STRING,
    }
})

module.exports = User;



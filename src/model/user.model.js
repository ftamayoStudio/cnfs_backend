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
        user_pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_tel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        user_age: {
            type: DataTypes.INTEGER,
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        google: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
});



module.exports = User;



const {  DataTypes, Model  } = require('sequelize')
const db = require('../config/db')

const Category = db.define('category', {
    category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Category;



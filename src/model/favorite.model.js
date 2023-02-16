const {  DataTypes, Model  } = require('sequelize')
const  db  = require('../config/db')
const { User, Workshop} = require('./index')


const Favorite = db.define('favorite', {
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: 'id'
      }
    },
    workshop_id: {
      type: DataTypes.STRING,
      references: {
        model: Workshop,
        key: 'id'
      }
    }
  });

  module.exports = Favorite;
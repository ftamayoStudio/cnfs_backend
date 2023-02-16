const { Sequelize } = require('sequelize')


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    define: {
        timestamps: true
    },
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});




module.exports = db



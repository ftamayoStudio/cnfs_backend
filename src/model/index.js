const User = require('./user.model');
const Establishment = require('./establishment.model');
const Workshop = require('./workshop.model');
const Category = require('./category.model');
const  db  = require('../config/db')
const {  DataTypes, Model  } = require('sequelize')


// const Favorite = require('./favorite.model')





Category.hasOne(Workshop, { foreignKey: 'category_id' });
Establishment.hasOne(Workshop, { foreignKey: 'establishment_id' });



const Favorite = db.define('favorite', {
    // user_id: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: User,
    //     key: 'id'
    //   }
    // },
    // workshop_id: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: Workshop,
    //     key: 'id'
    //   }
    // }
  });


Workshop.belongsToMany(User, { through: Favorite });    
User.belongsToMany(Workshop, { through: Favorite });

const createDBs = async () => {

    await Category.sync({ alter: true })
    await Establishment.sync({ alter: true })
    await Workshop.sync({ alter: true })
    await User.sync({ alter: true })
    await Favorite.sync({force: true})
}



module.exports = {
    User,
    Establishment,
    Workshop,
    Category,
    createDBs,
    Favorite
}



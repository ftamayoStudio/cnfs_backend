const User = require('./user.model');
const Establishment = require('./establishment.model');
const Workshop = require('./workshop.model');
const Category = require('./category.model');
const  db  = require('../config/db')
const {  DataTypes, Model  } = require('sequelize')


// const Favorite = require('./favorite.model')



Establishment.hasMany(Workshop, { foreignKey: "establishments"});

Workshop.belongsTo(Establishment,{ foreignKey: "establishment_id"});
Workshop.belongsTo(Category,{ foreignKey: "category_id"});


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
    await Workshop.sync({ alter: true })
    await Establishment.sync({ alter: true })
    // await User.sync({ alter: true })
    // await Favorite.sync({alter: true})
}


module.exports = {
    User,
    Establishment,
    Workshop,
    Category,
    createDBs,
    Favorite
}



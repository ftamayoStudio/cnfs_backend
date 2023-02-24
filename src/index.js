const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const db = require("./config/db");
const { createDBs } = require('./model/index');
const { Workshop, User, Establishment, Category }  = require("./model/index");





const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//importation of routes
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/etablissements', require('./routes/establishment.routes'));
app.use('/api/favoris', require('./routes/favorite.routes'));
app.use('/api/utilisateurs', require('./routes/user.routes'));
app.use('/api/ateliers', require('./routes/workshops.routes'));
app.use('/api/auth', require('./routes/auth.routes'));


//Connection DB
try {
    // db.authenticate();
    // createDBs();
    console.log("Connexion réussie à la base de données");

} catch (error) {
    console.error(error);
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`---------- server running on port ${port}`);
});

//DB CONNECTION
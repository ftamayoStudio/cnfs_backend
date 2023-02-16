
const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
require('dotenv').config();


//MODELS DB
const workshop = require("../router/workshop.router")
const category = require("../router/category.router")
const establishment = require("../router/establishment.router")
const user = require("../router/user.router")
const favorite = require("../router/favorite.router")

const app = express();
app.use(cors())
app.use(morgan("dev"));

app.use(express.json());

//Routes
app.use("/api/", workshop);
app.use("/api/", category);
app.use("/api/", establishment);
app.use("/api/", user);
app.use("/api/", favorite);

module.exports = app;
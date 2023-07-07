const express = require("express");
const app = express();
const restaurantRouter = require('../routes/restaurantRoutes')

const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json())
app.use('/restaurants', restaurantRouter)


module.exports = app;
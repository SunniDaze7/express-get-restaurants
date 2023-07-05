const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get('/restaurants/:id', async (req, res)=>{
    let id = req.params.id
    const restaurant = await Restaurant.findByPk(id)
    res.json(restaurant)
})



module.exports = app;
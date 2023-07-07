const { Router } = require("express");
const router = Router()
const Restaurant = require("../models/index")



// restaurant routes
router.get('/', async (req,res)=>{
    const data = await Restaurant.findAll()
    res.send(data)
})

router.get('/:id', async (req,res)=>{
    let id = req.params.id
    const data = await Restaurant.findByPk(id)
    res.json(data)
})

router.post('/', async (req,res,next)=>{
    try{
    const restaurant = await Restaurant.create(req.body)
    res.json(restaurant)
    }catch(error){
        next(error)
    }
})

router.put('/:id', async(req,res, next)=>{
    try{
        let id = req.params.id
        let restaurant = await Restaurant.findByPk(id)
        if(restaurant){
            restaurant = req.body
            res.json(restaurant)
        } else{
            throw new Error('restaurant not found')
        }
    } catch(error){
        next(error)
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        let id = req.params.id
        const restaurant = await Restaurant.findByPk(id)
        if(restaurant){
            await restaurant.destroy()
            res.json(restaurant)
        } else{
            throw new Error('restaurant not found')
        }
    }catch(error){
        next(error)
    }
})

module.exports = router
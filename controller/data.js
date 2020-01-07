const express = require('express')
const router  = express.Router()
const Data    = require('../models/data')

// add data
router.post('/add-data', async (req,res) =>{
    try{
        const addData = await Data.create(req.body);
        res.json({
            status:{
                "code": 200,
                "message": true
            },
            data: addData
        })
    } catch(err){
        console.log(err)
    }
})


//get data 
router.get('/get-data', async (req,res)=>{
  console.log('this is working')
    try{
        const foundData = await Data.find({})
        res.json({
            data: foundData
        })
    }catch(err){
        console.log(err)
    }
})

//update data 
router.put('/:id/update-data', async (req,res) =>{
    try{
        const updateData = await Data.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({
            status:{
                "code": 200,
                "message": true
            },
            data: updateData
        })
    }catch(err){
        console.log(err)
    }
})

//delete data 
router.delete('/:id', async(req, res)=>{
    try{
        await Data.findByIdAndRemove(req.params.id)
        res.json({
            status:{
                code: 200,
                message: true
            }
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = router;
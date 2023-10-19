const express = require("express");
const router = express.Router();
const user = require('../models/User.js')



router.get('/',(req,res)=>{
    res.send('hello from node router')
})



router.post('/createUser', async (req,res)=>{
    try {
        await user.create({
            name:req.body.name,
            email_address : req.body.email_address,
            phone:req.body.phone,
            subject:req.body.subject,
            message : req.body.message
        })
        res.json({succes:true})
    } catch (error) {
        console.log(error)
        res.json({succes : false})
        
    }
})

module.exports = router
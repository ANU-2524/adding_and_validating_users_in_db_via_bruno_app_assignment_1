const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('./schema.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
router.get("/" , async(req , res)=>{
    try{
    const data = await user.find() ;
    if(data.length === 0){
        return res.status(404).send([]) ;
    }
    return res.status(201).json(data) ;
        }
    catch(err){
        console.log(err) ;
        return res.status(500).send("Internal Server Error") ;
    }
})

router.post("/add" , async(req , res)=>{
    const {username , mail , password} = req.body ; 
    if (!username || !mail || !password){
        return res.status(400).send("Please provide all the required fields") ;
    }
    try{
        const hashedPass = await bcrypt.hash(password , saltRounds) ;
        const newUser = new user({
            username : username ,
            mail : mail ,
            password : hashedPass
        }) ;
        const newUserData = await newUser.save() ;
        return res.status(201).json(newUserData) ;
    }
    catch(err){
        console.log(err) ;
        return res.status(500).send("Internal Server Error") ;
    }

})

module.exports = router ;

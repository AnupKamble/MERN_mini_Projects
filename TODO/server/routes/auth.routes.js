
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Router } = require('express');
const {userModel} = require('../models/user.models')


const authRoutes = Router();

authRoutes.get('/' , async(req,res)=> {

    res.send("wip");
})



authRoutes.post('/signup', async(req,res)=> {
      
     
    const {name,gender,email,password} = req.body;
      
       const userPresent = await userModel.findOne({email});
       if ( userPresent) {
        res.send({'msg':'Already Exist! please try log in'});
       }
    try {
           
    bcrypt.hash(password, 7 , async function (err,hash) {

        const data = new userModel({name,gender,email,password:hash});
        await data.save();
        res.send('sign up successfully')
    })

    }
    catch(err) {
        
        res.status(500).send({'msg':'Something went wrong! please try again'})
    }
   
})


module.exports = {
    authRoutes
}

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Router } = require('express');
const { userModel } = require('../models/user.models')


const authRoutes = Router();

authRoutes.get('/', async (req, res) => {

    res.send("wip");
})



authRoutes.post('/signup', async (req, res) => {


    const { name, gender, email, password } = req.body;

    const userPresent = await userModel.findOne({ email });
    if (userPresent) {
        res.send({ 'msg': 'Already Exist! please try log in' });
    }
    try {

        bcrypt.hash(password, 7, async function (err, hash) {

            const data = new userModel({ name, gender, email, password: hash });
            await data.save();
            res.send({"msg":"signup Successfully"})
        })

    }
    catch (err) {

        res.status(500).send({ 'msg': 'Something went wrong! please try again' })
    }

})


authRoutes.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await userModel.find({ email })
        
        if (user.length > 0) {

            const hashed_password = user[0].password;

            bcrypt.compare(password, hashed_password, function (err, result) {

                if (result) {

                    const token = jwt.sign({ "userID": user[0]._id }, "secret");

                    res.send({ "msg": "log in successful", "token": token});
                }
                else {
                    res.send({ "msg": "log in failed" })
                }
            })
        } else {
            res.send({ "msg": "log in failed" })
        }

    }
    catch (err) {
       res.send({ "msg": "log in failed" })
    }
})





module.exports = {
    authRoutes
}
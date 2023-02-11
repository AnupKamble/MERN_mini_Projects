

const express = require('express');
const { Router } = require('express');
const { Authenticate } = require('../middleware/Authenticate');
const { todoModel } = require('../models/todos.models');


const todosRoute = Router();


todosRoute.get('/', Authenticate, async (req, res) => {

    try {
        const data = await todoModel.find();
        res.send(data);
    }
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})



todosRoute.post('/create', Authenticate, async (req, res) => {
    
    const payload = req.body;

    try {

        const data = new todoModel(payload)
              await data.save();
            res.send({"msg": "successfully created post"}) 
    }
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})



todosRoute.patch('/update/:patchID', Authenticate, async (req, res) => {

    try {
        res.send("i love cricket");
    }
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})


todosRoute.delete('/delete/:deleteID', Authenticate, async (req, res) => {

    try {
        res.send("i love cricket");
    }
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})


module.exports = {
    todosRoute
}


const express = require('express');
const { Router } = require('express');
const { Authenticate } = require('../middleware/Authenticate');


const todosRoute = Router();


todosRoute.get('/', Authenticate, async (req, res) => {

    res.send("i love cricket");
})


module.exports = {
    todosRoute
}
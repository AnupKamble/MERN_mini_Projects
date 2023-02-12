

const express = require('express');
const { Router } = require('express');
const { Authenticate } = require('../middleware/Authenticate');
const { todoModel } = require('../models/todos.models');


const todosRoute = Router();


todosRoute.get('/', async (req, res) => {

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

    const patchID =  req.params.patchID;
    const payload = req.body;
    const userID = req.body.userID;  // userID generated from jwt token 

    try { 
         const story = await todoModel.findOne({userID});  

         if ( userID !== story.userID) {    // we check the userID from DB and after token generated userID same or not

            res.send({"msg":"not Authorised"});
         }
         else {
       
            await todoModel.findByIdAndUpdate({_id : patchID},payload,{new:true});

            res.send("todo sucessfully updated");
         }
      }
    
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})


todosRoute.delete('/delete/:deleteID', Authenticate, async (req, res) => {
    
    const deleteID = req.params.deleteID;

    try {
        await todoModel.findByIdAndDelete({_id : deleteID})
        res.send("Todo successfully Deleted");
    }
    catch(err) {
        res.send({"msg":"unexpected error"});
    }
})


module.exports = {
    todosRoute
}
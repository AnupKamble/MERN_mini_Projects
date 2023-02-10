
const mongoose = require('mongoose');

const string = {type:"String",required:"true"};

const todoSchema = new mongoose.Schema (
     
    {
        todo : string,
        status : true
    }

)

const todoModel = mongoose.model('todos', todoSchema );

module.exports = {
    todoModel
}
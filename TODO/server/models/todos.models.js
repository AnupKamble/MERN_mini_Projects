
const mongoose = require('mongoose');

const string = {type:String, required:true};
const bool = {type: Boolean, default: false}

const todoSchema = new mongoose.Schema (
     
    {
        todo : string,
        status : bool,
        userID : string
    },
    {
        timestamps:true,
        versionKey : false
    }

)

const todoModel = mongoose.model('todos', todoSchema );

module.exports = {
    todoModel
}
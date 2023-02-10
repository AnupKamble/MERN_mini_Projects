
const mongoose = require('mongoose');



const todoSchema = new mongoose.Schema (
     
    {
        todo : {type:String, required:true},
        status : {type: Boolean, default: false},
        userID : {type:String, required:true}
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
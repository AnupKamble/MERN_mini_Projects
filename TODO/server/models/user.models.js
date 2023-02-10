
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema (

    {
        name : { type :String , required : true},
        gender : { type :String , required : true},
        email : { type :String , required : true},
        password : { type :String , required : true}

    },
    {
        timestamps: true,
        versionKey:false

    }
)

const userModel = mongoose.model( 'users' , userSchema);

module.exports = {
    userModel
}
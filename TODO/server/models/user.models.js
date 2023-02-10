
const mongoose = require('mongoose');

const string = { type :String , required : true}

const userSchema = new mongoose.Schema (

    {
        name : string,
        gender : string,
        email : string,
        password : string,

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
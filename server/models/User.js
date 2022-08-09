const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    firstName:{
        type:String,
        required:false,
    },
    lastName:{
        type:String,
        required:false,
    }
});

const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel
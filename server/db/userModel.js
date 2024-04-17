const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    postedAuctions:[{
        type:mongoose.Schema.Types.ObjectId
    }]
});

const userModel = mongoose.model("userData",userSchema);
module.exports = userModel;
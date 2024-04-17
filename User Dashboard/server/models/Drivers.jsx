const mongoose = require("mongoose");


const DriverSchema = new mongoose.Schema({
    name: String,
    date: Date,
    phonenumber : Number,
    vehicleno : String
    
})

const DriverModel = mongoose.model("DriverDetails",  DriverSchema)
module.exports = DriverModel
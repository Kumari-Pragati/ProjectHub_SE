const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    basePrice:{
        type:Number,
        required:true
    },
    imageUrl:[{
        type:String,
        required:true
    }],
    category:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    ItemOwner:{
        type:mongoose.Schema.Types.ObjectId
    },
    highestBid:[{
        amount:{
        type:Number,
        default:0
    },bidder:{
        type:mongoose.Schema.Types.ObjectId
    }
    }]
});

const itemModel = mongoose.model("ItemData",itemSchema);

module.exports = itemModel;


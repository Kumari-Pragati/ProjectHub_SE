import mongoose,{Schema} from "mongoose";

const oldHomeRegistrationSchema=new Schema({
    admin:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    facilities:[{
        type:String
    }],
    desc:{
        type:String
    }

},{timestamps:true});

export const oldHome=mongoose.model('oldHome',oldHomeRegistrationSchema);

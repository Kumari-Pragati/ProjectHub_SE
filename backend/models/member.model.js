import mongoose,{Schema} from "mongoose";

const memberSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    registeredBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

export const Member=mongoose.model('Member',memberSchema);
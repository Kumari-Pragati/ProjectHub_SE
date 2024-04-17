const mongoose=require('mongoose');



const RideSchema=mongoose.Schema({
    ID:{
        type: Number,
    },
    Image:{
        type: String,
        default: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    },
    Name:{
        type: String,
        required: true,
      },
    Gender:{
        type: String,
      },
    Stops:{
        type: String,
    },
    Timing:{
        type: String,
    },
    Vehicle_type:{
        type: String,
    },
    Vehicle:{
        type: String,
    },
    Vehicle_no:{
        type: String,
        unique: true,
    },

});


const Ride= mongoose.model("ride",RideSchema);

module.exports=Ride;


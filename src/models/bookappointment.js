const mongoose = require('mongoose');

const bookappointment = new mongoose.Schema({
    appointmentform:{
        Name: {
            type: String,
           
            description: "Name"
          },
          email: {
            type: String,
           
            unique: true,
            lowercase: true,
            trim: true,
            match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            description: "Email"
          },
          Purpose_of_Appointment: {
            type: String,
            
            description: "POA"
          },
          Mobile_Number: {
            type: String,
           
            match: /^[0-9]{10}$/,
            description: "Mobile Number"
          },
          date_of_appointment: {
            type: Date,
          
            description: "Date of Appointment"
          }

    }
})
const Appointment = mongoose.model('Appointment', bookappointment);

module.exports = mongoose.model('Appointment',bookappointment);

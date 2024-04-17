const mongoose = require('mongoose');

// Define the schema for the Client model
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  // Add more fields as needed
}, {
  timestamps: true, // This will add createdAt and updatedAt fields to the schema
});

// Create the Client model using the schema
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
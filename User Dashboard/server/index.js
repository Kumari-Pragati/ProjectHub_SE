const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const DriverModel = require('./models/Drivers')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/bon-voyage")

app.get('/rides' , (req , res) => {
    DriverModel.find().then(Drivers => res.json(Drivers))
    .catch(err => res.json(err));
})


app.listen(3001 , () => {
    console.log('Server is running on port 3001...');
})
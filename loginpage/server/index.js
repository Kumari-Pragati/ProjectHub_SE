const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const userModel = require('./models/bon')

const app = express()
app.use(express.json()) 
app.use (cors())



app.post("/" , (req,res) => {
    const {email , password} = req.body;
    userModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
                console.log("Done")
            }
            else{
                res.json("Password Incorrect!")
            }
        }
        else{
            res.json("No Record Exists!")
        }
    })

})

app.post("/register" , (req,res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

mongoose.connect("mongodb://localhost:27017/bon-voyage");

app.listen(3001 , () => {
    console.log('server is running on port 3001')
})
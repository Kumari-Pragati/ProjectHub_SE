const express = require('express')
const mongoose=require("mongoose")
const Ride=require("./models/ride_model")
const app = express()
const port = 3000;



app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/ride', async(req, res) => {
  try {
      const ride = await Ride.find({});
      res.status(200).json(ride);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

app.get('/ride/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const ride = await Ride.findById(id);
      res.status(200).json(ride);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})


app.post('/ride', async(req, res) => {
  try {
      const ride = await Ride.create(req.body)
      res.status(200).json(ride);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

// update a product
app.put('/ride/:id', async(req, res) => {
  try {
      const {id} = req.params;
      const ride = await Ride.findByIdAndUpdate(id, req.body);
      // we cannot find any product in database
      if(!ride){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      const updatedride = await Ride.findById(id);
      res.status(200).json(updatedride);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// delete a product

app.delete('/ride/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const ride = await Ride.findByIdAndDelete(id);
      if(!ride){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      res.status(200).json(ride);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})


mongoose.set("strictQuery",false)
mongoose.connect('mongodb://127.0.0.1:27017/BonVoyage')
.then(()=>{
  console.log("Connected to DB")
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch((err)=>{
  console.log(err);
})
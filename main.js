const express = require ("express");
const mysql = require('mysql');
const app= express(); 
const router = express.Router();
const cors=require('cors')
const bodyParser=require('body-parser')

app.use(cors());
app.use(bodyParser.json())

app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
})
const pool = mysql.createConnection({
    host: 'localhost',   // MySQL server hostname
    user: 'new_user',    // MySQL username
    password: 'password', // MySQL password
    database: 'carhub' // MySQL database name
  });

pool.connect((error) => {
  if (error) {
      console.error('Error connecting to MySQL server:', error);
    }
    console.log('Connected to MySQL server.');
    // pool.query("create database sample",function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
  });


  app.post('/search', (req, res) => {
    const searchTerm = req.body.searchTerm;
    const query = `SELECT * FROM Cars WHERE make = '${searchTerm}' OR model = '${searchTerm}'`;
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error searching for cars:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        console.log(results)
        res.json({result: results});
    });
});

app.post('/admin', (req, res) => {
  const { userName, password } = req.body;
  console.log(userName + ' ' + password);
  const query = `SELECT * FROM admin WHERE username = ? AND password = ?`;
  pool.query(query, [userName, password], (error, results) => {
    if (error) {
      console.error('Error searching for admin:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: 'Username or password is incorrect' });
    }
  });
});

app.get('/carDetails',async(req,res)=>{
  const query = `SELECT * FROM Cars `;
  pool.query(query, (error, results) => {
    if (error) {
        console.error('Error searching for cars:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
    console.log(results)
    res.json({result: results});
});
})


app.delete('/deleteCar/:carId', (req, res) => {
  const carId = req.params.carId;
  console.log(carId)
  // Execute DELETE query
  pool.query('DELETE FROM Cars WHERE CarID = ?', carId, (error, results) => {
    if (error) {
      console.error('Error deleting car:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Check if any rows were affected
    if (results.affectedRows === 0) {
      // No rows affected, car not found
      res.status(404).json({ message: 'Car not found' });
    } else {
      // Car successfully deleted
      res.status(200).json({ message: 'Car deleted successfully' });
    }
  });
});

app.post('/addCar', (req, res) => {
  const { makeValue, mileageValue, priceValue, modelValue, yearValue, sellerIdValue, descriptionValue, imageUrlsValue } = req.body;

  // Construct the SQL query to insert the car data into the database
  const query = 'INSERT INTO Cars (Make, Mileage, Price, Model, Year, SellerID, Description, ImageURLs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [makeValue, mileageValue, priceValue, modelValue, yearValue, sellerIdValue || null, descriptionValue, imageUrlsValue];

  // Execute the SQL query
  pool.query(query, values, (error, results) => {
      if (error) {
          console.error('Error adding car:', error);
          res.status(500).json({ error: 'Internal server error' });
          return;
      }
      
      // Car successfully added to the database
      res.status(200).json({ message: 'Car added successfully' });
  });
});



// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));





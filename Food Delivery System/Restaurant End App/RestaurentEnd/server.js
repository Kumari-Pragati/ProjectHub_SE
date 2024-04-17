const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'food',
    user: 'root',
    password: '1234'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(cors());

app.get('/pastOrders', (req, res) => {
    const query = 'SELECT * FROM past_orders'; // Assuming you have a table named 'past_orders' in your database

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ' + error.stack);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results); // Send the fetched past orders as JSON response
    });
});

app.get('/ordersToDeliver', (req, res) => {
    const query = 'SELECT * FROM orders_to_deliver'; // Assuming you have a table named 'orders_to_deliver' in your database

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ' + error.stack);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results); // Send the fetched orders to deliver as JSON response
    });
});

const port = 5500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDb = require('./config/connectDb')

// database call
connectDb();

// rest object
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
// user
app.use('/api/v1/client', require('./routes/clientRoute'));
// transaction routes
app.use('/api/v1/transactions', require('./routes/techRoute'));

// static files
// app.use(express.static(path.join(__dirname, './client/build')));

// app.get('*', function(req,res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// port
const PORT = 8080;

// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
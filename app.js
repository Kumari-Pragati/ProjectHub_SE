const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql2');
const fs = require('fs');
const { transformToXml } = require('./converter.js');
const {parseEdiText } = require('./converter.js');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // The origin you want to allow
    methods: ['GET', 'POST'], // HTTP methods you want to allow
    allowedHeaders: ['Content-Type'], // Headers you want to allow
}));
// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });
require('dotenv').config();
// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
        ca: fs.readFileSync(process.env.DB_SSL_CA_PATH),
        rejectUnauthorized: false
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to handle file uploads and store them in MySQL
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // File metadata and content
    const fileName = req.file.originalname;
    const fileContent = req.file.buffer.toString('utf8');

    // Insert the file into the database
    const query = 'INSERT INTO files (file_name, file_content) VALUES (?, ?)';
    connection.query(query, [fileName, fileContent], (err, results) => {
        if (err) {
            console.error('Error inserting file:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        res.json({ message: 'File uploaded and stored in database' });
    });
});

// Route to process files from the MySQL database and convert them to XML
// Route to process files from the MySQL database and convert them to XML
app.get('/convert', (req, res) => {
    const query = 'SELECT * FROM files';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving files from database:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Process each file and convert it to XML
        results.forEach((file) => {
            const parsedData = parseEdiText(file.file_content);
            const xml = transformToXml(parsedData);

            // Store the converted XML data in a new table
            const xmlQuery = 'INSERT INTO converted_files (file_id, file_name, xml_content) VALUES (?, ?, ?)';
            connection.query(xmlQuery, [file.id, file.file_name, xml], (err) => {
                if (err) {
                    console.error('Error inserting converted file:', err);
                    return;
                }
            });
        });

        res.json({ message: 'Files converted and stored in database' });
    });
});
// Route to fetch converted XML data from the database
app.get('/converted-xml', (req, res) => {
    const query = 'SELECT * FROM converted_files';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving converted XML data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});


// Start the server on port 3000
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
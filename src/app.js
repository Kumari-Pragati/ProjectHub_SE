const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

require("./db/conn");
const Patient = require('./models/register');
const Appointment=require('./models/bookappointment')
const port = process.env.PORT || 5500;

const static_path = path.join(__dirname, "../public");

const publicDirectoryPath = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path))

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render("index");
});

app.get('/registration', (req, res) => {
  res.render("registration");
});

// create a new user in our database
app.post('/registration', async (req, res) => {
  try {
    const existingPatient = await Patient.findOne({ 'personalInformation.email': req.body.email });
    if (existingPatient) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Create a new patient instance
    const newPatient = new Patient({
      personalInformation: {
        fullname: req.body.fullname,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        maritalstatus: req.body.maritalstatus
      },
      emergencyContactInformation: {
        emergencycontact: req.body.emergencycontact,
        relationship: req.body.relationship,
        emergencycontactnumber: req.body.emergencycontactnumber
      },
     

      
      password: req.body.password
    });

    // Save the new patient to the database
    const savedPatient = await newPatient.save();
    res.render("index")
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Patient.findOne({ 'personalInformation.email': email });

    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }

    // If login successful, redirect to the index page
    res.render("index");
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).send("Invalid login credentials");
  }
});
app.get('/appointment', (req, res) => {
  res.render("appointment");
});
app.post('/appointment', async (req, res) => {
  try {
    const existingPatient = await Patient.findOne({ 
      'personalInformation.email': req.body.email, 
      'personalInformation.Name': req.body.Name 
    });
    if (existingPatient) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Create a new patient book appointment instance
    const newbookappointment = new Appointment({
      appointmentform: {
        Name: req.body.Name,
        email: req.body.email,
        Purpose_of_Appointment: req.body.Purpose_of_Appointment,
        Mobile_Number: req.body.Mobile_Number,
        date_of_appointment: req.body.date_of_appointment
      },
    });

    // Save the new patient to the database
    const savedPatientbookapp = await newbookappointment.save();
    res.render("index");
  } catch (error) {
    console.log("here")
    console.error('bookappointment error:', error);
    res.status(400).send(error);
  }
});



app.get('/login', (req, res) => {
  res.render("login");
});

app.get('/contact', (req, res) => {
  res.render("contact");
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/appointment', (req, res) => {
  res.render("appointment");
});

app.get('/terms', (req, res) => {
  res.render("terms");
});


app.get('/blog', (req, res) => {
  res.render("blog");
});

app.get('/doctors', (req, res) => {
  res.render("doctors");
});

app.get('/gallery', (req, res) => {
  res.render("gallery");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

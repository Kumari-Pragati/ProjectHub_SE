const express = require("express");
const mysql = require("mysql2");
// const bcrypt = require('bcryptjs');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "/*removed from here*/",
  database: "onlineedu",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  res.render("home-page.ejs");
});

app.get("/home-page", (req, res) => {
  res.render("home-page.ejs");
});

app.get("/About", (req, res) => {
  res.render("About.ejs");
});

app.get("/add_resources", (req, res) => {
  res.render("add_resources.ejs");
});

app.get("/course_resources", (req, res) => {
  res.render("courses_resources.ejs");
});

app.get("/courses", (req, res) => {
  let queryString = "SELECT * FROM courses";
  db.query(queryString, (error, results, fields) => {
      if (error) {
          console.error("Error executing query:", error);
          return res.status(500).send("An unexpected error occurred");
      }
      console.log(results);
      res.render("courses.ejs", { courses: results });
  });
});


app.get("/dbms_test", (req, res) => {
  res.render("dbms_test.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/progress", (req, res) => {
  res.render("progress.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log("Recived Post on /register");
    let { user_type, email, username, password, confirm_password } = req.body;
  
    // Check if password matches confirm_password
    if (password !== confirm_password) {
      return res.status(400).send("Passwords do not match");
    }
  
    // Use parameterized query to prevent SQL injection
    let queryString = "INSERT INTO users (username, email, password, user_type) VALUES (?, ?, ?, ?)";
    let values = [username, email, password, user_type];
  
    // Use the 'db' variable instead of 'connection'
    db.query(queryString, values, (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        return res.status(500).send("Error registering user");
      }
      console.log("Query results:", results);
      if (user_type == "student") {
        res.redirect("/courses");
      }else{
        res.redirect("/teacher_courses");
      }
    });
  
    console.log("Data Entered Success!");
  });
  

  app.post("/login", async (req, res) => {
    let { username, password } = req.body;
  
    //console.log("Received login request for usernmae:", username);
  
    // Use parameterized query to prevent SQL injection
    let queryString = "SELECT * FROM users WHERE username = ? LIMIT 1";
    let values = [username];
  
    // Use the 'db' variable instead of 'connection'
    db.query(queryString, values, (error, results, fields) => {
      if (error) {
      //  console.error("Error executing query:", error);
        return res.status(500).send("Error logging in");
      }
   //   console.log("Query results:", results);
      if (results.length === 0) {
        return res.status(400).send("User not found");
      }
      
      // Check if the password matches
      const user = results[0];
      if (user.password !== password) {
        return res.status(400).send("Incorrect password");
      }
  
      // Redirect user based on user type
      if (user.user_type === "student") {
        res.redirect("/courses");
      } else {
        res.redirect("/teacher_courses");
      }
    });
  });
  
  
  

app.get("/select_subject", (req, res) => {
  res.render("select_subject.ejs");
});

app.get("/software_engineering_test", (req, res) => {
  res.render("software_engineering_test.ejs");
});

app.get("/teacher_courses", (req, res) => {
 let queryString = "SELECT * FROM users WHERE username = ? LIMIT 1";
    let values = [username];
  
    // Use the 'db' variable instead of 'connection'
    db.query(queryString, values, (error, results, fields) => {
      if (error) {
      //  console.error("Error executing query:", error);
        return res.status(500).send("Error logging in");
      }
   //   console.log("Query results:", results);
      if (results.length === 0) {
        return res.status(400).send("User not found");
      }
      
      // Check if the password matches
      const user = results[0];
      if (user.password !== password) {
        return res.status(400).send("Incorrect password");
      }
  
      // Redirect user based on user type
      if (user.user_type === "student") {
        res.redirect("/courses");
      } else {
        res.redirect("/teacher_courses");
      }
    });



  res.render("teacher_courses.ejs");
});
app.post("/teacher_courses", (req, res) => {
  let { name, description } = req.body;

  // Get the teacher's user_id based on their username
  let teacherUsername = "Rahul"; // Assuming the teacher's username is known
  let getTeacherIdQuery = "SELECT user_id FROM users WHERE username = ?";
  db.query(getTeacherIdQuery, [teacherUsername], (error, results, fields) => {
      if (error) {
          console.error("Error executing query:", error);
          return res.status(500).send("Error getting teacher's user_id");
      }

      if (results.length === 0) {
          return res.status(400).send("Teacher not found");
      }

      // Assuming there's only one teacher with the given username
      let teacherId = results[0].user_id;

      // Insert the course into the courses table with the retrieved teacher_id
      let insertCourseQuery = "INSERT INTO courses (course_name, course_description, teacher_id) VALUES (?, ?, ?)";
      let values = [name, description, teacherId];
      db.query(insertCourseQuery, values, (error, results, fields) => {
          if (error) {
              console.error("Error executing query:", error);
              return res.status(500).send("Error adding course");
          }
          console.log("Course added successfully");
          res.redirect("/teacher_courses");
      });
  });
});

app.get("/tests", (req, res) => {
  res.render("tests.ejs");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

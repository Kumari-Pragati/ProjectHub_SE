const express = require('express')
const fs = require("fs");
const app = express()
const cors = require('cors'); 
const port = 3001
app.use(cors()); 
app.use(express.json());

app.post('/register', (req, res) => {
  let { username, password } = req.body;
  let users = Array.from(JSON.parse(fs.readFileSync("db.json")))
  let flag = false;
  console.log(users)
  users.map(user => {
    if (user.username === username) {
      res.send('User already exists');
      flag = true
    }
  })
  if (flag) return;
  users.push({ username, password });
  res.send('User created');
  let save = JSON.stringify(users);
  console.log(save)
  fs.writeFileSync("db.json", save);
})

app.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log(username)
  let users = Array.from(JSON.parse(fs.readFileSync("db.json")))
  let flag = false;
  users.map(user => {
    if (user.username === username && user.password === password) {
      res.send('Login successful');
      flag = true
    }
  })
  if (!flag) res.send('Invalid credentials');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
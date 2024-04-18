// Route for user registration
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
    //   if (err) {
    //     console.error('Error registering user:', err);
    //     res.status(500).send('Error registering user');
    //     return;
    //   }
    //   console.log('User registered successfully');
    //   res.status(201).send('User registered successfully');
    // });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Route for user login
// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
//       if (err) {
//         console.error('Error fetching user:', err);
//         res.status(500).send('Error fetching user');
//         return;
//       }
//       if (result.length === 0) {
//         res.status(401).send('Invalid username or password');
//         return;
//       }
//       const user = result[0];
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (!passwordMatch) {
//         res.status(401).send('Invalid username or password');
//         return;
//       }
//       res.status(200).send('Login successful');
//     });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).send('Error logging in');
//   }
// });
<h2>Overview Of The Project</h2><br>

Our project is 'Student Management System'. 
[Watch Demo](https://youtu.be/Tmncayg7FeU)

It is a straightforward tool designed to help schools and colleges keep track of their students. It's all about simplicity and ease of use, with just a few key features:<br>

Easy Access: Admins can quickly sign up and log in to the system, ensuring only authorized users can manage student data.<br>
Add Students: Admins can easily add new students to the system, making it simple to keep student records up to date.<br>
Update Student Info: Need to change a student's details? No problem! Admins can easily update student information whenever necessary.<br>

Our system is all about making student management as easy as possible. No complicated features, just the essentials to help you stay organized and focused on what matters most: your students.<br>

<h2>Features</h2>

- User authentication and authorization (JWT)
- User profile creation and management
- Student profile creation
- Student profile updatation


<h2>Steps To Run The Project</h2><br>

<h3>Prerequisites</h3>

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB or MongoDB Atlas account

<h3>Installation</h3>
1. Clone the repository<br>

git clone <--repo link-->

2. Go to the project directory and install dependencies for both the admin-client and server in seperate terminals

```bash
cd admin-client
npm install
```

```bash
cd server
npm install
```

Note: If any errors occur, run the folowing commmand

```bash
npm audit fix
```

4. Start the server

```bash
cd server
npm start
node index.js
```

5. Start the admin-client

```bash
cd client
npm run dev
```
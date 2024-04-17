import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login",
        values
      );
      console.log("Response:", response.data);
      // Redirect to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div className="back">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button type="submit" className="sign">
            Sign in
          </button>
        </form>
        <p className="signup">
          Don't have an account?{" "}
          <Link className="signupButton" to={"/register"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

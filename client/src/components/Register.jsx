import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State to hold error message
  const navigate = useNavigate();

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
        "http://localhost:3002/api/auth/register",
        values
      );
      console.log("Response:", response.data);
      navigate("/login");
      // Optionally, you can redirect the user to a new page or display a success message here
    } catch (error) {
      console.error("Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.msg === "user already registered"
      ) {
        // If user already exists, set error state to display an alert
        setError("User already registered!");
      } else {
        // For other errors, reset error state
        setError(null);
      }
    }
  };


  return (
    <div className="back">
      <div className="form-container">
        <p className="title">Register</p>
        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}{" "}
          {/* Display error if exists */}
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
              type="email"
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
            <div className="forgot"></div>
          </div>
          <button type="submit" className="sign">
            Sign Up
          </button>
        </form>
        <p className="signup">
          Already have an account?{" "}
          <Link className="loginButton" to={"/login"}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

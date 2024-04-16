import React, { useState } from "react";
import { CiUser, CiMail } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:8000/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data.status == true) {
            console.log(res.data.user);
            localStorage.setItem("userId", res.data.user._id);
            history("/landingpage");
          } else {
            alert("Wrong Username or Password");
          }
        })
        .catch((e) => {
          alert("Enter details Correctly");
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[50%] w-[25%] border-2 border-slate-600"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl mb-4 font-bold tracking-wide">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="username"
          >
            <CiUser className="inline-block align-middle mr-2" />
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="password"
          >
            <MdOutlinePassword className="inline-block align-middle mr-2" />
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            style={{ textDecoration: "none" }}
          >
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

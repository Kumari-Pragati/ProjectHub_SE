import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const initialValues = {
    fullName: "",
    username: "",
    age: "",
    email: "",
    password: "",
    confirm: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [fromErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useNavigate();
  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(formValues);
    console.log(formValues);
    console.log(Object.keys(error).length);
    setFormErrors(error);
    setIsSubmit(true);
    if (Object.keys(error).length === 0) {
      try {
        await axios
          .post("http://localhost:8000/signup", {
            formValues,
          })
          .then((res) => {
            console.log(res);
            if (res.data.message == "user created succesfully")
              history("/login");
            else {
              alert("Username is not unique");
            }
          })
          .catch((e) => {
            alert("Enter details Correctly");
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formValues).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regex1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{4,10})$/;
    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!regex1.test(values.password)) {
      errors.password = "Please Enter valid password";
    }
    if (!values.confirm) {
      errors.confirm = "Please confirm the password";
    } else if (values.confirm !== values.password) {
      errors.confirm = "Please enter the same password ";
    }
    return errors;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-2 border-solid border-slate-800 p-8 rounded-lg shadow-lg w-[25%]">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block font-semibold mb-1 text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your Name"
              name="fullName"
              value={formValues.fullName}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:border-blue-400 w-[95%]"
            />
            {fromErrors.fullName && (
              <p className="text-red-500">{fromErrors.fullName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold mb-1 text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={formValues.username}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2 w-[95%] focus:outline-none focus:border-blue-400"
            />
            {fromErrors.username && (
              <p className="text-red-500">{fromErrors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold mb-1 text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              name="age"
              value={formValues.age}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2 w-[95%] focus:outline-none focus:border-blue-400"
            />
            {fromErrors.username && (
              <p className="text-red-500">{fromErrors.age}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2 w-[95%] focus:outline-none focus:border-blue-400"
            />
            {fromErrors.email && (
              <p className="text-red-500">{fromErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-semibold mb-1 text-gray-700"
            >
              Create Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2 w-[95%] focus:outline-none focus:border-blue-400"
            />
            {fromErrors.password && (
              <p className="text-red-500">{fromErrors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm"
              className="block font-semibold mb-1 text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm Password"
              name="confirm"
              value={formValues.confirm}
              onChange={handleClick}
              className="border border-gray-300 rounded-md px-3 py-2 w-[95%] focus:outline-none focus:border-blue-400"
            />
            {fromErrors.confirm && (
              <p className="text-red-500">{fromErrors.confirm}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none font-semibold tracking-wide text-slate-100"
            >
              Submit
            </button>
            <button>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

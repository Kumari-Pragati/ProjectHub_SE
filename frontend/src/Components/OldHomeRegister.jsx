import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const OldAgeHomeRegistrationForm = () => {
  const username = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    capacity: "",
    facilities: [],
    description: "",
    userId: username,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleFacilitiesChange = (e) => {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, value],
      });
    } else {
      setFormData({
        ...formData,
        facilities: formData.facilities.filter(
          (facility) => facility !== value
        ),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:8000/oldhome", {
          formData,
        })
        .then((res) => {
          if (res.data.status == true) navigate("/landingpage");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen border-4 bg-gray-100 flex justify-center items-center">
      <div className="w-[25%] border-4 border-gray-500 mx-auto p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl mb-4">Old Age Home Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Capacity:</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Facilities:</label>
            <label className="inline-block mr-4">
              <input
                type="checkbox"
                name="facility"
                value="Medical Care"
                onChange={handleFacilitiesChange}
                className="mr-2"
              />
              Medical Care
            </label>
            <label className="inline-block mr-4">
              <input
                type="checkbox"
                name="facility"
                value="Recreation Area"
                onChange={handleFacilitiesChange}
                className="mr-2"
              />
              Recreation Area
            </label>
            {/* Add more facilities as needed */}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Document:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default OldAgeHomeRegistrationForm;

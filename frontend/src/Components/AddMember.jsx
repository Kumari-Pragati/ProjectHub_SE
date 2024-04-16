import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddMember = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState(null);
  const username = localStorage.getItem("userId");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to backend
    const formData = {
      fullName,
      email,
      age,
      address,
      phone,
      document,
      userId: username,
    };
    try {
      await axios
        .post("http://localhost:8000/addmember", {
          formData,
        })
        .then((res) => {
          //resetFormFields;
          console.log(fullName);
          if (res.data.status == true)
            navigate("/allhomes/addmember/accepted", {
              state: { id: fullName },
            });
        });
    } catch (e) {
      console.log(e);
    }
  };
  // Reset form fields after submission
  const resetFormFields = () => {
    setFullName("");
    setEmail("");
    setAge("");
    setAddress("");
    setPhone("");
    setDocument(null);
  };
  return (
    <div className="max-w-md mx-auto mt-16 bg-[#f0f0f0] rounded-xl p-6 styling">
      <h2 className="text-2xl font-bold mb-4">Add Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full h-8 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-8 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full h-8 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-8 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="document" className="block text-gray-700">
            Document
          </label>
          <input
            type="file"
            id="document"
            onChange={(e) => setDocument(e.target.files[0])}
            className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            accept=".pdf,.doc,.docx,image/*"
          />
        </div>
        <button
          type="submit"
          className="w-full border-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};
export default AddMember;

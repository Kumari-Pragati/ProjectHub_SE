import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAuctions.css";
import Forminput from "./Forminput";
import axios from "axios";

const MyAuctions = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [values, setValues] = useState({
    userId: "6619798bf0da4a23715247c2",
    name: "",
    description: "",
    category: "",
    startTime: "", // Initialize startTime and endTime as empty strings
    endTime: "",
    imageUrl: "",
    basePrice: 20,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Item Name",
      errorMessage: "Item name should be at least 3 characters long!",
      label: "Item Name",
      required: true,
    },
    {
      id: 2,
      name: "category",
      type: "text",
      placeholder: "Category",
      errorMessage: "Category is required",
      label: "Category",
      required: true,
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Description",
      errorMessage: "Description is required",
      label: "Description",
      required: true,
    },
    {
      id: 4,
      name: "startTime",
      type: "date",
      placeholder: "Auction Start Date",
      label: "Auction Start Date",
      required: true, // Make start time required
    },
    {
      id: 5,
      name: "endTime",
      type: "date",
      placeholder: "Auction End Date",
      label: "Auction End Date",
      required: true, // Make end time required
    },
    {
      id: 6,
      name: "imageUrl",
      type: "text",
      placeholder: "Images",
      errorMessage: "Add one or more images!",
      label: "Images",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Values:", values);
      const response = await axios.post(
        "http://localhost:3002/api/item/create-item",
        values
      );

      console.log("Response:", response.data);

      // Redirect to home page after successful form submission
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Add Auction</h1>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyAuctions;

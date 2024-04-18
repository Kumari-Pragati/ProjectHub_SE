import React from "react";
import { useNavigate } from "react-router-dom";
const Landingpage = () => {
  const navigate = useNavigate();
  // Function to handle registration button click
  const handleRegisterClick = () => {
    // Add logic to handle registration button click
    console.log("Register button clicked");
    navigate("/homeregistration");
  };

  // Function to handle add member button click
  const handleAddMemberClick = () => {
    // Add logic to handle add member button click
    navigate("/allhomes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500 images">
      <div className="w-full rounded-lg  p-10 mt-16">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 mb-12">
          Welcome to Old Age Home Management
        </h2>
        <div className="flex justify-center space-x-8">
          <button
            onClick={handleRegisterClick}
            className="py-4 px-8 w-2/5 rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register Old Age Home
          </button>
          <button
            onClick={handleAddMemberClick}
            className="py-4 px-8 w-2/5 rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Member to Old Age Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

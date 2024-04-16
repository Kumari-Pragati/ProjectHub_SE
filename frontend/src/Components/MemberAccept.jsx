import React from "react";
import { useLocation } from "react-router-dom";

const MemberAccept = () => {
  const location = useLocation();
  const memberId = location.state.id;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Welcome <span className="text-yellow-400">{memberId}</span> to Our Old
          Age Home!
        </h1>
        <p className="text-gray-700">
          We are delighted to have you as a member of our community.
        </p>
        <img
          src="https://img.freepik.com/free-vector/nursing-home-activities-concept-illustration_114360-23407.jpg?t=st=1712960693~exp=1712964293~hmac=7fe503f18540e0355b82d4f30a930ee6eb6552254f7c9002c0dd019d9d41d661&w=900"
          alt="Old Age Home Logo"
          className="mt-8 mx-auto w-64 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MemberAccept;

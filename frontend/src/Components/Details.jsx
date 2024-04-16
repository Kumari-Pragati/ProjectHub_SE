import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Details = () => {
  const [data, setData] = useState();
  const { user_id } = useParams();
  console.log(user_id);

  const getDetails = async () => {
    const res = await axios.get(`http://localhost:8000/gethome/${user_id}`);
    setData(res);
    console.log(res);
  };
  useEffect(() => {
    getDetails();
  }, [user_id]);

  return data ? (
    <div className="w-1/2 h-auto mx-auto mt-10 bg-[#f0f0f0] rounded-md overflow-hidden shadow-md p-6 flex flex-col justify-center ">
      <div className="mb-4">
        <p className="text-3xl font-semibold">{data.data.data.name}</p>
        <p className="text-lg">
          {data.data.data.address}, {data.data.data.city},{" "}
          {data.data.data.state}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg">Email: {data.data.data.email}</p>
        <p className="text-lg">Phone: {data.data.data.phone}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg">
          Capacity: <b>{data.data.data.capacity}</b>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg">{data.data.data.description}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Facilities:</p>
        <ul className="list-disc pl-6">
          {data.data.data.facilities.map((facility, index) => (
            <li key={index} className="text-lg">
              {facility}
            </li>
          ))}
          <li className="text-lg">Wellness Program</li>
          <li className="text-lg">HouseKeeping Services</li>
          <li className="text-lg">Transportation</li>
        </ul>
      </div>
      <div className="flex flex-row-reverse">
        <Link
          to="/allhomes/addmember"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="bg-cyan-500 w-20 border rounded-lg text-white p-1">
            Join
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <p>Loading......</p>
    </div>
  );
};

export default Details;

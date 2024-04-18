import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Allhomes = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getHomes = async () => {
    const res = await axios.get("http://localhost:8000/homelist");
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getHomes();
  }, []);
  return (
    <div>
      {data ? (
        data.map((home, index) => (
          <div className="container flex flex-col mt-16 ml-16 border-2 border-black w-3/5 hover:cursor-pointer">
            <div
              className="flex h-56 w-full"
              onClick={() => navigate(`/allhomes/details/${home._id}`)}
            >
              <img
                src="https://img.freepik.com/free-vector/elderly-care-cartoon-concept-with-old-women-walking-outdoors-vector-illustration_1284-80135.jpg?size=626&ext=jpg&ga=GA1.1.649460153.1706985195&semt=ais"
                alt="old age"
                className="w-[40%] bg-gray-200"
              />
              <div className="bg-slate-400 w-full flex flex-col justify-center items-center gap-4">
                <p className="text-3xl">{home.name}</p>
                <p className="text-2xl">{home.address}</p>
                <p className="text-2xl">Phone:{home.phone}</p>
                <p className="text-2xl">
                  Capacity: <b>{home.capacity}</b>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Loading......</p>
        </div>
      )}
    </div>
  );
};
export default Allhomes;

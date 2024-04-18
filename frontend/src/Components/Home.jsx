import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-slate-500">
      <div className="h-[12%] w-full bg-slate-200 flex">
        <div className="w-[55%] h-full flex justify-end items-center">
          <div className="h-full w-[10%] flex items-center">
            <img
              className="h-[80%]"
              src="https://media.istockphoto.com/id/1220378235/vector/seniors-at-house-black-vector-icon.jpg?s=612x612&w=0&k=20&c=JYleW8PvbLg3QkNhzT8HDCqVopG5U6nXzurIueJ6lnQ="
              alt=""
            />
          </div>
          <div className=" font-semibold font-serif text-3xl tracking-wide text-slate-800">
            OldAgeHome
          </div>
        </div>
        <div className="w-[45%] h-full flex justify-end">
          <div className="w-[60%] h-full"></div>
          <div className="w-[40%] h-full flex justify-around">
            <div className="flex items-center">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className=" bg-green-500 rounded-full p-4 px-6 text-slate-200 tracking-wide font-medium">
                  Login
                </button>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className=" bg-green-500 rounded-full p-4 px-6 text-slate-200 tracking-wide font-medium">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[88%] w-full flex">
        <div className="w-[60%] flex items-center justify-center">
          <div className="w-[90%] h-[70%] rounded-lg">
            <img
              className="h-full w-full border-2 border-slate-700 rounded-lg"
              src="https://tribecacare.com/wp-content/uploads/2019/02/fun-activities-in-old-age-home.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <div className="w-[90%] h-[70%] flex justify-center items-center">
            <p className="text-3xl text-white font-bold space-y-3 tarcking-wide">
              Aging is not lost youth <br></br> <t></t>but a new stage <br></br>
              of opportunity and strength
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };

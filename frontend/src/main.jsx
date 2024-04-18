import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import appRouter from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import OldAgeHomeRegistrationForm from "./Components/OldHomeRegister.jsx";
import Allhomes from "./Components/Allhomes.jsx";
import Details from "./Components/Details.jsx";
import AddMember from "./Components/AddMember.jsx";
import MemberAccept from "./Components/MemberAccept.jsx";
import { Home } from "./Components/Home.jsx";
import Landingpage from "./Components/Landingpage.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/landingpage",
        element: <Landingpage />,
      },
      {
        path: "/homeregistration",
        element: <OldAgeHomeRegistrationForm></OldAgeHomeRegistrationForm>,
      },
      {
        path: "/allhomes",
        element: <Allhomes />,
      },
      {
        path: "/allhomes/details/:user_id",
        element: <Details />,
      },
      {
        path: "/allhomes/addmember",
        element: <AddMember></AddMember>,
      },
      {
        path: "/allhomes/addmember/accepted",
        element: <MemberAccept />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

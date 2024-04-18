import Signup from "./Components/Signup";
import React from "react";
import ReactDom from "react-dom";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;

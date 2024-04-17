import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload.jsx";
import View from "./pages/View.jsx";
import UploadPdf from "./pages/UploadPdf.js";
import UploadImage from "./pages/UploadImage.js";
import ViewImage from "./pages/ViewImage.js";
import ViewPdf from "./pages/ViewPdf.js";
import Registration from "./pages/Register.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/View" element={<View />} />
          <Route path="/Upload-pdf" element={<UploadPdf />} />
          <Route path="/Upload-Img" element={<UploadImage />} />
          <Route path="/View-Img" element={<ViewImage />} />
          <Route path="/View-Pdf" element={<ViewPdf />} />
          <Route path="/Register" element={<Registration/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

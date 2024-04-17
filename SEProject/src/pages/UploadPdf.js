import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/UploadPdf.css'; // Import CSS file for styling
import Navbar from '../Components/Navbar';

function UploadPdf() {
  const [file, SelectedFile] = useState(null);
  const [text, setText] = useState("");
  const [allImage, setAllImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    SelectedFile(file);
  };

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:8000/get-files");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message);
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:8000/files/${pdf}`, "_blank", "noreferrer");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", text);
    formData.append("file", file);

    try {
      const result = await axios.post("http://localhost:8000/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(result.data);
      setText("");
      SelectedFile(null);
      alert("Pdf Uploaded Successfully")
      getPdf();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Document Upload Page</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value) }}
          className="input-field"
          placeholder="Enter title"
        />
        <input
          type="file"
          onChange={handleFileChange}
          accept="application/pdf"
          className="input-field"
        />
        <button
          type="submit"
          className="submit-button"
        >
          Upload
        </button>
      </form>
    </div>
    </div>
  );
}

export default UploadPdf;

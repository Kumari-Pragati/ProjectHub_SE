import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../style/UploadImage.css'; // Import CSS file for styling
import Navbar from '../Components/Navbar';

export default function UploadImage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    try {
      await axios.post("http://localhost:8000/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setName("");
      setImage(null);
      // Refresh the list of images after upload
      alert("Image Uploaded Successfully")
      getImage();
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  const getImage = async () => {
    try {
      const timestamp = new Date().getTime();
      const result = await axios.get(`http://localhost:8000/get-image?timestamp=${timestamp}`);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const showImage = (image) => {
    window.open(`http://localhost:8000/files/${image}`, "_blank", "noreferrer");
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
   <div>
    <Navbar/>
    <div className="upload-image-container">
    
      <h2>Upload Image</h2>
      <form onSubmit={submitImage} className="upload-form">
        <input type="file" accept="image/*" onChange={onInputChange} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
      <div className="image-list">
        
      </div>
    </div>
    </div>
   
  );
}

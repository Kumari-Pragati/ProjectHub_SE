import React, { useEffect, useState } from 'react';
import axios from 'axios';

 // Import CSS file for styling
import '../style/ViewImage.css'
import Navbar from '../Components/Navbar';
export default function ViewImage() {
    const [allImage, setAllImage] = useState();

    const getImage = async () => {
        try {
            const timestamp = new Date().getTime();
            const result = await axios.get(`http://localhost:8000/get-image?timestamp=${timestamp}`);
            setAllImage(result.data.data);
        } catch (error) {
            console.error("Error fetching images:", error.message);
        }
    };

    const showPdf = (image) => {
        window.open(`http://localhost:8000/files/${image}`, "_blank", "noreferrer");
    };

    useEffect(() => {
        getImage();
    }, []);

    return (
        <div>
    <Navbar/>
        <div className="view-image-container">
            {allImage == null ? "" : allImage.map((data) => (
                <div key={data._id} className="image-item">
                    <h1 className="image-title">Title: {data.name}</h1>
                    <button className="view-image-btn" onClick={() => showPdf(data.image)}>View Image</button>
                </div>
            ))}
        </div>
        </div>
    );
}

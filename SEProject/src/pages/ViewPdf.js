import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ViewImage.css' // Import CSS file for styling
import Navbar from '../Components/Navbar';

export default function ViewPdf() {
    const [allImage, setAllImage] = useState(null);

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

    return (
        <div>
    <Navbar/>
        <div className="view-image-container">
            {allImage == null ? "" : allImage.map((data) => (
                <div key={data._id} className="image-item">
                    <h1 className="image-title">Title: {data.title}</h1>
                    <button className="view-image-btn" onClick={() => showPdf(data.pdf)}>View PDF</button>
                </div>
            ))}
        </div>
        </div>
    );
}

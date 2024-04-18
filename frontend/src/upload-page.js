import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileUploadAndConvert() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [convertedXml, setConvertedXml] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();

        if (!file) {
            setMessage('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Upload the file
            const uploadResponse = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(uploadResponse.data.message);

            // Convert the files
            const convertResponse = await axios.get('http://localhost:5000/convert');
            setMessage(convertResponse.data.message);

            // Fetch converted XML data
            fetchConvertedXml();

        } catch (error) {
            console.error('Error:', error);
            setMessage('Error occurred during file upload or conversion');
        }
    };

    // Function to fetch converted XML data
    const fetchConvertedXml = async () => {
        try {
            const response = await axios.get('http://localhost:5000/converted-xml');
            setConvertedXml(response.data);
        } catch (error) {
            console.error('Error fetching converted XML:', error);
            setMessage('Error fetching converted XML');
        }
    };

    useEffect(() => {
        fetchConvertedXml(); // Fetch converted XML data when component mounts
    }, []);

    return (
        <div>
            <h1>File Upload and Convert</h1>
            <form onSubmit={handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload and Convert</button>
            </form>
            <p>{message}</p>

            {/* Display the converted XML data */}
            <div>
                <h2>Converted XML Data:</h2>
                {convertedXml.map((item, index) => (
                    <div key={index}>
                        <h3>File Name: {item.file_name}</h3>
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                            {item.xml_content}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileUploadAndConvert;

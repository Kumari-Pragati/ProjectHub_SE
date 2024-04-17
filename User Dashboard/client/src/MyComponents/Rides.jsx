import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import './Table.css';
import axios from 'axios'; // Correct import statement for Axios

export const Rides = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3031/drivers')
            .then(res => setdata(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>VEHICLE NUMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.Date}</td>
                            <td>{d.Name}</td>
                            <td>{d.PhoneNumber}</td>
                            <td>{d.VehicleNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

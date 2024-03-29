import React, { useState, useEffect } from 'react';
import api from '../../api/endpoint';

const AppointmentsList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {

            const response = await fetch("/appointments/all", {
                method: "GET",
                headers: {

                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (data.appointments) {
                // Dữ liệu là một mảng các cuộc hẹn
                console.log(data.appointments);
            } else {
                console.error('Error during fetching appointments:', error);

            }
        };


        fetchAppointments();
    }, []);

    return (
        <div>
            <style>
                {`
                    .appointments-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    .appointments-table th, .appointments-table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }

                    .appointments-table th {
                        background-color: #f2f2f2;
                    }
                `}
            </style>

            <h2>Appointments List</h2>
            <table className="appointments-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Kiểm tra xem appointments có phải là mảng không trước khi sử dụng map */}
                    {Array.isArray(appointments) ? (
                        appointments.map(appointment => (
                            <tr key={appointment._id}>
                                <td>{appointment._id}</td>
                                <td>{appointment.title}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No appointments available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;

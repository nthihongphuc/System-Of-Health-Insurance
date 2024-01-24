import React from 'react';

const AppointmentsList = () => {
    const appointments = [
        { id: 1, title: 'Meeting 1', date: '2024-02-15', time: '10:00 AM' },
        { id: 2, title: 'Meeting 2', date: '2024-02-16', time: '02:30 PM' },
        // Add more appointments as needed
    ];

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
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.id}</td>
                            <td>{appointment.title}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;

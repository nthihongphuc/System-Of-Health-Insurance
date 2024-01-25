// HistoryPaymentList.jsx
import React, { useState, useEffect } from 'react';
import api from '../../api/endpoint';

const HistoryPaymentList = () => {
    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getAllBills();
                if (response && response.data) {
                    setPaymentList(response.data);
                } else {
                    console.error('Failed to fetch payment list');
                }
            } catch (error) {
                console.error('Error during fetching payment list:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="history-payment-list">
            <h2>History Payment List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Total</th>
                        <th>Time</th>
                        <th>Time End</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Bill Url</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentList.map((payment) => (
                        <tr key={payment._id}>
                            <td>{payment._id}</td>
                            <td>{payment.Total}</td>
                            <td>{payment.Time}</td>
                            <td>{payment.Time_End}</td>
                            <td>{payment.Status}</td>
                            <td>{payment.Type}</td>
                            <td>{payment.Bill_Url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style>{`
                .history-payment-list {
                    max-width: 800px;
                    margin: 0 auto;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                th {
                    background-color: #f2f2f2;
                }
            `}</style>
        </div>
    );
};

export default HistoryPaymentList;

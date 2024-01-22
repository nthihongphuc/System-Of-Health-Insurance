import React, { useState } from 'react';
import { Table } from 'antd';

const HistoryPaymentList = () => {
    const [historyPaymentList, setHistoryPaymentList] = useState([
        { transactionId: 'TXN123', amount: '100 USD', date: '2024-02-10', status: 'Success' },
        { transactionId: 'TXN124', amount: '150 USD', date: '2024-02-12', status: 'Pending' },
        { transactionId: 'TXN125', amount: '80 USD', date: '2024-02-15', status: 'Failed' },
        // Add more sample data as needed
    ]);

    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <div>
            <h2>History Payment List</h2>
            <Table columns={columns} dataSource={historyPaymentList} rowKey="transactionId" />
        </div>
    );
};

export default HistoryPaymentList;

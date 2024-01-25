import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import api from '../../api/endpoint';

const TransactionListPage = ({ history }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const transactionsData = await api.getAllTransactions();

                if (transactionsData) {
                    // Lưu trữ dữ liệu vào state
                    setTransactions(transactionsData.all_bill_requests);
                } else {
                    console.error('Failed to fetch transactions data');
                }
            } catch (error) {
                console.error('Error during fetching transactions data:', error);
            }
        };

        fetchTransactions();
    }, []);

    const handleViewDetails = (transactionId) => {
        // Điều hướng đến trang chi tiết giao dịch
        history.push(`/transaction-details/${transactionId}`);
    };

    return (
        <div>
            <h2>Danh sách giao dịch bảo hiểm</h2>
            <List
                itemLayout="horizontal"
                dataSource={transactions}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={`Giao dịch ${item._id}`}
                            description={`Số tiền: ${item.Total} - Ngày: ${item.Time}`}
                        />
                        <Button type="primary" onClick={() => handleViewDetails(item._id)}>
                            Xem chi tiết
                        </Button>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TransactionListPage;

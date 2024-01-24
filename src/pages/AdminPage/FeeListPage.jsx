import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import api from '../../api/endpoint';

const FeeListPage = ({ history }) => {
    const [feeList, setFeeList] = useState([]);

    useEffect(() => {
        // Fetch danh sách chi phí bảo hiểm từ API
        const fetchFeeList = async () => {
            try {
                // Simulate response from API with sample data
                const sampleData = [
                    {
                        _id: '1',
                        policyHolderName: 'Nguyễn Văn A',
                        feeAmount: 1000000,
                        paymentDate: '2022-01-10',
                    },
                    {
                        _id: '2',
                        policyHolderName: 'Trần Thị B',
                        feeAmount: 1500000,
                        paymentDate: '2022-02-20',
                    },
                    // Add more sample data as needed
                ];

                setFeeList(sampleData);
            } catch (error) {
                console.error('Error during fetching fee list:', error);
            }
        };

        fetchFeeList();
    }, []);

    const handleViewDetails = (feeId) => {
        // Điều hướng đến trang chi tiết chi phí bảo hiểm
        history.push(`/fee-details/${feeId}`);
    };

    return (
        <div>
            <h2>Danh sách chi phí bảo hiểm</h2>
            <List
                itemLayout="horizontal"
                dataSource={feeList}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.policyHolderName}
                            description={`Số tiền: ${item.feeAmount} VND - Ngày thanh toán: ${item.paymentDate}`}
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

export default FeeListPage;

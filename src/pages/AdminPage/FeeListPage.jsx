import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import api from '../../api/endpoint';

const FeeListPage = ({ history }) => {
    const [feeList, setFeeList] = useState([]);

    useEffect(() => {
        // Fetch danh sách chi phí bảo hiểm từ API
        const fetchFeeList = async () => {
            try {
                const response = await api.getAllInsuranceCostsForAllUsers();

                if (response && response.all_bill_requests) {
                    // Lấy dữ liệu từ API và cập nhật state
                    setFeeList(response.all_bill_requests);
                } else {
                    console.error('Failed to fetch fee list from API');
                }
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
                            title={item.Cus_Id.email}
                            description={`Số tiền: ${item.Type_Payment} VND - Ngày thanh toán: ${item.createdAt}`}
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

import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import api from '../api/endpoint';

const InsuranceListPage = ({ history }) => {
    const [insuranceList, setInsuranceList] = useState([]);

    useEffect(() => {
        // Fetch danh sách đơn đăng ký bảo hiểm từ API
        const fetchInsuranceList = async () => {
            try {
                const response = await api.getInsuranceList();
                if (response.success) {
                    setInsuranceList(response.data);
                } else {
                    console.error('Failed to fetch insurance list:', response.message);
                }
            } catch (error) {
                console.error('Error during fetching insurance list:', error);
            }
        };

        fetchInsuranceList();
    }, []);

    const handleViewDetails = (insuranceId) => {
        // Điều hướng đến trang chi tiết đơn đăng ký bảo hiểm
        history.push(`/insurance-details/${insuranceId}`);
    };

    return (
        <div>
            <h2>Danh sách đơn đăng ký bảo hiểm</h2>
            <List
                itemLayout="horizontal"
                dataSource={insuranceList}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.policyHolderName}
                            description={`Ngày đăng ký: ${item.registrationDate}`}
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

export default InsuranceListPage;

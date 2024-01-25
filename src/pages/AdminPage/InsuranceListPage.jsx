import React, { useState, useEffect } from 'react';
import { List, Button, Space } from 'antd';
import api from '../../api/endpoint';

const InsuranceListPage = ({ history }) => {
    const [insuranceList, setInsuranceList] = useState([]);

    useEffect(() => {
        // Fetch danh sách đơn đăng ký bảo hiểm từ API
        const fetchInsuranceList = async () => {
            try {
                const response = await api.getAllRegistrations();
                if (response) {
                    setInsuranceList(response.allRegistrations);
                } else {
                    console.error('Failed to fetch insurance list');
                }
            } catch (error) {
                console.error('Error during fetching insurance list:', error);
            }
        };

        fetchInsuranceList();
    }, []);

    // const handleViewDetails = (insuranceId) => {
    //     // Điều hướng đến trang chi tiết đơn đăng ký bảo hiểm
    //     history.push(`/insurance-details/${insuranceId}`);
    // };

    return (
        <div>
            <h2>Danh sách đơn đăng ký bảo hiểm</h2>
            <List
                itemLayout="horizontal"
                dataSource={insuranceList}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.customer.cusname}
                            description={`Ngày đăng ký: ${item.registerForm.registrationDate}`}
                        />
                        <Space>
                            <Button type="primary" onClick={() => handleViewDetails(item.insurance._id)}>
                                Xem chi tiết
                            </Button>

                        </Space>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default InsuranceListPage;

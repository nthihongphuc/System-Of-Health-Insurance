import React, { useState, useEffect } from 'react';
import { Table, Button, Space } from 'antd';
import api from '../api/endpoint';

const RegisterList = () => {
    const [registerList, setRegisterList] = useState([]);
    const [loading, setLoading] = useState(true);

    const containerStyle = {
        margin: '20px',
    };

    const columns = [
        // ... (Các cột giữ nguyên như bạn đã định nghĩa)
    ];

    useEffect(() => {
        const fetchRegisterList = async () => {
            try {
                // Giả mạo dữ liệu từ API hoặc backend
                const fakeData = [
                    {
                        _id: '1',
                        CusID: 'CUS001',
                        InsID: 'INS001',
                        timeStart: '2022-01-01',
                        status: 'Active',
                        detail: 'Lorem ipsum',
                    },
                    // Thêm dữ liệu giả mạo khác nếu cần
                ];

                setRegisterList(fakeData);
                setLoading(false);
            } catch (error) {
                console.error('Error during fetching Register list:', error);
                setLoading(false);
            }
        };

        fetchRegisterList();
    }, []);

    const handleEdit = (id) => {
        // Handle edit logic
        console.log('Edit Register with ID:', id);
    };

    const handleDelete = (id) => {
        // Handle delete logic
        console.log('Delete Register with ID:', id);
    };

    return (
        <div style={containerStyle}>
            <h2>Register List</h2>
            <Table columns={columns} dataSource={registerList} loading={loading} rowKey="_id" />
        </div>
    );
};

export default RegisterList;

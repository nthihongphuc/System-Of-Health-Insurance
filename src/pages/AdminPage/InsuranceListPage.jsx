import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import api from '../../api/endpoint';

const InsuranceListPage = () => {
    const [insuranceList, setInsuranceList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getAllRegisterInsurance();
                if (response && response.data && response.data.registers) {
                    setInsuranceList(response.data.registers);
                } else {
                    console.error('Failed to fetch insurance list');
                }
            } catch (error) {
                console.error('Error during fetching insurance list:', error);
            }
        };

        fetchData();
    }, []); // Passing an empty dependency array ensures useEffect runs once after the initial render.

    const columns = [
        {
            title: 'Cus_ID',
            dataIndex: 'Cus_ID',
            key: 'Cus_ID',
        },
        {
            title: 'Ins_ID',
            dataIndex: 'Ins_ID',
            key: 'Ins_ID',
        },
        {
            title: 'Time_Regis',
            dataIndex: 'Time_Regis',
            key: 'Time_Regis',
        },
        {
            title: 'Time_Start',
            dataIndex: 'Time_Start',
            key: 'Time_Start',
        },
        {
            title: 'Time_End',
            dataIndex: 'Time_End',
            key: 'Time_End',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
        },
        // Thêm các cột khác tương ứng với các thuộc tính khác
    ];

    return (
        <div>
            <h2>Danh sách đơn đăng ký bảo hiểm</h2>
            <Table dataSource={insuranceList} columns={columns} />
        </div>
    );
};

export default InsuranceListPage;

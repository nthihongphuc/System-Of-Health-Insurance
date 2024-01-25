// PolicyList.jsx
import React, { useState, useEffect } from 'react';

const PolicyList = () => {
    const [policyList, setPolicyList] = useState([]);

    // Giả sử policyListData là dữ liệu đơn đăng ký từ server (có thể là một API call)
    const policyListData = [
        { id: 1, fullName: 'Nguyen Van A', email: 'vana@example.com', policyType: 'health' },
        { id: 2, fullName: 'Tran Thi B', email: 'thib@example.com', policyType: 'life' },
        // Thêm dữ liệu khác nếu cần
    ];

    useEffect(() => {
        // Simulate fetching policy list data from the server
        setPolicyList(policyListData);
    }, []);

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyle = {
        padding: '12px',
        textAlign: 'left',
        border: '1px solid #ddd',
        backgroundColor: '#f2f2f2',
    };

    const tdStyle = {
        padding: '12px',
        textAlign: 'left',
        border: '1px solid #ddd',
    };

    return (
        <div>
            <h2>Danh Sách Đơn Đăng Ký Chính Sách</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Họ và Tên</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Loại Chính Sách</th>
                    </tr>
                </thead>
                <tbody>
                    {policyList.map((policy) => (
                        <tr key={policy.id}>
                            <td style={tdStyle}>{policy.id}</td>
                            <td style={tdStyle}>{policy.fullName}</td>
                            <td style={tdStyle}>{policy.email}</td>
                            <td style={tdStyle}>{policy.policyType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PolicyList;

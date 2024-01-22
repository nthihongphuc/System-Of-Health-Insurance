import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    };

    const titleStyle = {
        color: '#333',
        textAlign: 'center',
    };

    const menuStyle = {
        listStyleType: 'none',
        padding: '0',
        textAlign: 'center',
    };

    const buttonStyle = {
        marginBottom: '15px', // Khoảng cách giữa các nút
        width: '100%', // Chiều dài tương đương
        padding: '15px 25px',
        backgroundColor: '#fff', // Nền trắng
        color: '#007bff', // Chữ màu xanh
        border: '1px solid #007bff', // Viền màu xanh
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const handleButtonClick = (path) => {
        navigate(`/admin${path}`);
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Bạn đang đăng nhập với quyền Admin</h2>
            <ul style={menuStyle}>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/InsuranceListPage')}>
                        ĐƠN ĐĂNG KÝ BẢO HIỂM
                    </button>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/PolicyList')}>
                        ĐƠN ĐĂNG KÍ CHÍNH SÁCH
                    </button>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/FeeListPage')}>
                        PHÍ BẢO HIỂM
                    </button>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/ApointmentList')}>
                        ĐƠN ĐẶT LỊCH TƯ VẤN
                    </button>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/UpdatePolicy')}>
                        CẬP NHẬT CHÍNH SÁCH
                    </button>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => handleButtonClick('/HistoryPaymentList')}>
                        LỊCH SỬ GIAO DỊCH
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AdminPage;

import React, { useState, useEffect } from 'react';

const AllBillsPage = () => {
    const [allBills, setAllBills] = useState([]);

    useEffect(() => {
        // Giả sử danh sách hóa đơn được lấy từ API được đặt vào state allBills
        // Thực tế, bạn cần gọi API để lấy dữ liệu và cập nhật state

        // Mock data
        const mockData = [
            {
                _id: '1',
                Total: 100,
                Time: '2022-01-01',
                Time_End: '2022-01-31',
                Status: 'Paid',
                Type: 'Insurance',
                Bill_Url: 'https://example.com/bill1',
            },
            {
                _id: '2',
                Total: 150,
                Time: '2022-02-01',
                Time_End: '2022-02-28',
                Status: 'Pending',
                Type: 'Insurance',
                Bill_Url: 'https://example.com/bill2',
            },
            {
                _id: '3',
                Total: 120,
                Time: '2022-03-01',
                Time_End: '2022-03-31',
                Status: 'Paid',
                Type: 'Insurance',
                Bill_Url: 'https://example.com/bill3',
            },
            // Thêm các hóa đơn khác nếu cần
        ];

        setAllBills(mockData); // Cập nhật state với dữ liệu mẫu
    }, []);

    return (
        <div>
            <h2 className="title">Danh sách tất cả hóa đơn</h2>
            <table className="bills-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tổng tiền</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Trạng thái</th>
                        <th>Loại</th>
                        <th>Link hóa đơn</th>
                    </tr>
                </thead>
                <tbody>
                    {allBills.map((bill) => (
                        <tr key={bill._id}>
                            <td>{bill._id}</td>
                            <td>${bill.Total}</td>
                            <td>{bill.Time}</td>
                            <td>{bill.Time_End}</td>
                            <td>{bill.Status}</td>
                            <td>{bill.Type}</td>
                            <td>
                                <a href={bill.Bill_Url} target="_blank" rel="noopener noreferrer">
                                    Xem hóa đơn
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <style>
                {`
                    .bills-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    .bills-table th, .bills-table td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: left;
                    }

                    .bills-table th {
                        background-color: #f2f2f2;
                    }

                    .title {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default AllBillsPage;

import { Button, Card, Table } from "antd";

const profile = {
  fullname: "Lê Thị Cà Dzốt",
  phone: "0101010101",
  email: "ragot@email.com",
  address: "12 rau củ quả, phường vườn rau",
};

const columns = [
  {
    title: "Tên bảo hiểm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thời gian đăng ký",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Thời gian hết hạn",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <div>
        <Button onClick={() => console.log(record.id)}>Xem chi tiết</Button>
      </div>
    ),
  },
];

const data = [
  {
    id: "1",
    name: "Bảo hiểm nhân thọ",
    startDate: "12/12/1212",
    endDate: "12/12/1213",
    status: "active",
  },
  {
    id: "2",
    name: "Bảo hiểm tai nạn",
    startDate: "12/12/1212",
    endDate: "12/12/1213",
    status: "active",
  },
  {
    id: "3",
    name: "Bảo hiểm lao động",
    startDate: "12/12/1212",
    endDate: "12/12/1213",
    status: "active",
  },
];

const ProfilePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ padding: 20 }}>
        <Card title="Thông tin cá nhân">
          <div>Họ và tên: {profile.fullname}</div>
          <div>Số điện thoại: {profile.phone}</div>
          <div>Email: {profile.email}</div>
          <div>Địa chỉ: {profile.address}</div>
        </Card>
      </div>
      <div style={{ padding: 20 }}>
        <Card title="Thông tin bảo hiểm">
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;

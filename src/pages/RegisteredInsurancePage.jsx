import React, { useEffect, useState } from 'react';
import { Layout, theme, Card } from 'antd';
import { Collapse } from 'antd';
import { Content } from 'antd/es/layout/layout';
import api from '../api/endpoint';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const { Header} = Layout;

const RegisteredInsurancePage = () => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [userInfo, setUserInfo] = useState([]);
  const { Panel } = Collapse;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await api.getRegisterInsurance();
        if (data) {
          localStorage.getItem('access_token', data.data.accessToken);
          setUserInfo(data?.data?.insuranceData);

        } else {
          toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        // alert('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    };
    fetchUserInfo();
  }, []);
  const handleButtonClick = (userId) => {
    navigate('/product/:id');

  };
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
        <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm đã đăng ký</span>
      </Header>
      <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%", maxWidth: 10000, minHeight: "100vh" }}
          bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Collapse accordion style={{ width: '100%', border: 'none' }}>
          {userInfo?.map((user) => {
            const key = user.insurance?._id; 
            const label = user.insurance?.Ins_Name;
            const items = {
              "Tên khách hàng": user?.customer?.cusname,
              "Loại bảo hiểm": user?.TypeInsuranceName?.Type_Name,
              "Thời gian bắt đầu": user?.registerForm?.timeStart,
              "Tình trạng": user?.registerForm?.status,
              "Chi tiết": user?.registerForm?.detail,
              "Xem thông tin bảo hiểm": (
                <div style={{botton: '5px', color:'#1677ff', textDecoration: 'underline', display: 'inline'}}> 
                  <a href={`/product/${key}`}>
                    Xem chi tiết
                  </a>
                </div>
              ),
            }

            return (
              <Panel key={key} header={label}>
                <ul>
                  {Object.entries(items).map(([fieldName, fieldValue]) => (
                    <li key={fieldName}>
                      <strong>{fieldName}:</strong> {fieldValue}
                    </li>
                  ))}
                </ul>
              </Panel>
            );
          })}
        </Collapse>
        </Card>
      </Content>
    </Layout>
  );
};

export default RegisteredInsurancePage;

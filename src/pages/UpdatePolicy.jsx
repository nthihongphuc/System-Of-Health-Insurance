import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, message } from 'antd';
import api from '../api/endpoint';

const UpdatePolicyPage = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);

        try {
            // Gọi API để cập nhật chính sách bảo hiểm với giá trị từ form
            const response = await api.updatePolicy(values);

            if (response.success) {
                message.success('Cập nhật chính sách thành công');
            } else {
                message.error('Có lỗi xảy ra khi cập nhật chính sách');
            }
        } catch (error) {
            console.error('Error during updating policy:', error);
            message.error('Có lỗi xảy ra khi cập nhật chính sách');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <style>
                {`
                    .update-policy-form {
                        max-width: 400px;
                        margin: 20px auto;
                    }

                    .update-policy-form .ant-form-item {
                        margin-bottom: 16px;
                    }

                    .update-policy-form .ant-form-item-label {
                        text-align: left;
                    }

                    .update-policy-form .ant-form-item-control-input-content {
                        display: flex;
                        align-items: center;
                    }

                    .update-policy-form .ant-btn-primary {
                        background-color: #1890ff;
                        border-color: #1890ff;
                    }

                    .update-policy-form .ant-btn-primary:hover {
                        background-color: #40a9ff;
                        border-color: #40a9ff;
                    }
                `}
            </style>

            <h2>Cập nhật chính sách bảo hiểm</h2>

            <Form
                name="update-policy-form"
                onFinish={onFinish}
                className="update-policy-form"
                initialValues={{ /* Các giá trị mặc định của form */ }}
            >
                {/* Các trường cập nhật chính sách */}
                <Form.Item
                    label="Tên chính sách"
                    name="policyName"
                    rules={[{ required: true, message: 'Vui lòng nhập tên chính sách' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ngày bắt đầu"
                    name="startDate"
                    rules={[{ required: true, message: 'Vui lòng chọn ngày bắt đầu' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Nội dung cập nhật"
                    name="updateContent"
                    rules={[{ required: true, message: 'Vui lòng nhập nội dung cập nhật' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                {/* Nút cập nhật */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UpdatePolicyPage;

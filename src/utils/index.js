import axios from 'axios';

const apiEndpoint = 'http://localhost:3000'; // Đường dẫn API của bạn

const callApi = async (endpoint, method = 'get', data = null) => {
    try {
        const response = await axios({
            method,
            url: `${apiEndpoint}${endpoint}`,
            data,
            headers: {
                'Content-Type': 'application/json',
                // Bạn có thể thêm các headers khác nếu cần
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error; // Ném lỗi để có thể xử lý ở nơi gọi hàm
    }
};

export default callApi;
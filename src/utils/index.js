import axios from 'axios';

const apiEndpoint = 'http://localhost:3000';

const callApi = async (endpoint, method = 'get', data = null) => {
    try {
        const response = await axios({
            method,
            url: `${apiEndpoint}${endpoint}`,
            data,
            headers: {
                'Content-Type': 'application/json',

            },
        });

        return response.data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
};

export default callApi;
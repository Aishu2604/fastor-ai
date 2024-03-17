import axios from "axios";

axios.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
});

export async function post(suburl, payload) {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/${suburl}`,
            payload
        );
        if(response.data.status_code === 200) {
            return {
                data: response.data,
            };
        }

        return {
            error: response.data.error_message || response.data.error
        }
    } catch (error) {
        return {
            error: error.response.data || error.message,
        };
    }
}

export async function get(suburl, query) {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/${suburl}`,
            {
                params: query,
            }
        );
        return {
            data: response.data,
        };
    } catch (error) {
        return {
            error: error.response.data || error.message,
        };
    }
}

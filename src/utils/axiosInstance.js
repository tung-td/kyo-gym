import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
});

export const get = async (url, options = {}) => {
    try {
        const response = await axiosInstance.get(url, options);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const post = async (url, data, options = {}) => {
    try {
        const response = await axiosInstance.post(url, data, options);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const put = async (url, data, options = {}) => {
    try {
        const response = await axiosInstance.put(url, data, options);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const patch = async (url, data, options = {}) => {
    try {
        const response = await axiosInstance.patch(url, data, options);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const remove = async (url, data, options = {}) => {
    try {
        const response = await axiosInstance.delete(url, data, options);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Mỗi request đều setting sẵn r - bỏ 1 lần ở đây và không dùng axios => dùng request để gọi api
axiosInstance.interceptors.request.use((config) => {
    const token = 'Bearer ' + localStorage.getItem('token');


    if (token) {
        config.headers.authorization = token;
    }
    return config;
});


axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data.message === 'Error -> Not authenticated') {
            if (
                !window.location.href.includes('login') &&
                !window.location.href.includes('register')
            ) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            return;
        }
        return response;
    },
    (error) => {
        console.log('Err', error);
        if (error?.response?.status === 401 || error?.response?.status === 400 || error?.response?.status === 404) {
            if (
                !window.location.href.includes('login') &&
                !window.location.href.includes('register')
            ) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            return;
        }
        return Promise.reject(error);
    }
);

export * as request from './axiosInstance';

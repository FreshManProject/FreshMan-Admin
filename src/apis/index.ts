import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_APP_FRESHMAN_PUBLIC_API_URL;

export const axiosDefault = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosForm = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

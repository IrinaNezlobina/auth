import axios from 'axios';
import { getToken, removeToken } from "@/utils/auth.js";
import { useRouter } from "vue-router";

const BASE_API = 'https://dummyjson.com/';

const service = axios.create({
    baseURL: BASE_API
});

/* Настройка всех запросов */
service.interceptors.request.use(
    (config) => {
        const conf = config;

        conf.headers['Content-Type'] = 'application/json';

        if (getToken) {
            conf.headers.Authorization = `Bearer ${getToken()}`;
        }

        return conf;
    },
    (error) => {
        Promise.reject(error);
    }
);

/* Настройка всех ответов */
service.interceptors.response.use(
    (response) => {
        const { data } = response;

        return data;
    },
    (error) => {
        const { response } = error;

        if (response?.status === 401) {
            removeToken();
            useRouter.push('/');
        }

        return Promise.reject(new Error(error));
    }
);

export { BASE_API };

export default service;
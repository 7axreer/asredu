// src/helpers/api/telegramClient.js
import axios from "axios";

const telegramClient = axios.create({
    baseURL: "https://api.telegram.org",
    headers: {
        "Content-Type": "application/json",
    },
});

telegramClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default telegramClient;

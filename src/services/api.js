import axios from "axios";

const api = axios.create({
    baseURL: "https://fashion-store-api.onrender.com/",
    timeout: 8 * 1000,
});

export { api };
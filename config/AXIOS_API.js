import axios from "axios";

const config = {
    baseURL: "http://192.168.1.7:8080/api/v1",
    header: {
        "Content-Type": "application/json",
    }
};

const API = axios.create(config);
export default API;
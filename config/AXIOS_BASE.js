import axios from "axios";

const config = {
    // baseURL: "http://192.168.1.7:8080/no-auth", // nha C7
    baseURL: "http://192.168.100.10:8080/no-auth", // nha Tien
    // baseURL: "http://10.87.24.104:8080/no-auth", // nha Tien
    header: {
        "Content-Type": "application/json",
    }
};

const BASE = axios.create(config);
export default BASE;
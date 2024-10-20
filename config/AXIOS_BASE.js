import axios from "axios";

const config = {
    baseURL: "http://192.168.1.7:8080/no-auth",
    header: {
        "Content-Type": "application/json",
    }
};

const BASE = axios.create(config);
export default BASE;
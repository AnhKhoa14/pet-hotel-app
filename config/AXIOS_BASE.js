import axios from "axios";

const config = {
    baseURL: "http://192.100.10:8080/no-auth",
    header: {
        "Content-Type": "application/json",
    }
};

const BASE = axios.create(config);
export default BASE;
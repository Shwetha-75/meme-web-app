import axios from "axios";


const axiosLogin = axios.create({
    baseURL:"http://127.0.0.1:9000",
    withCredentials:true,
});

const axiosRegister = axios.create({
    baseURL:"http://localhost:5002",
    withCredentials:true,
});

export{axiosLogin,axiosRegister};

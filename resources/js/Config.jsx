import axios from "axios";

const base_api_url = "http://localhost:8000/api/v1";
//ROUTE
export default{
    //AUTH
    GetRegister:(data) => axios.post(`${base_api_url}/auth/register`, data),
    GetLogin:(data) => axios.post(`${base_api_url}/auth/login`, data)
}
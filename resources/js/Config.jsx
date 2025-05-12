import axios from "axios";

const base_api_url = "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: base_api_url,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  // AUTH
  GetRegister: (data) => api.post(`/auth/register`, data),
  GetLogin: (data) => api.post(`/auth/login`, data),

  // Logout usando token Bearer
  GetLogout: (token) =>
    api.post(`/auth/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
};

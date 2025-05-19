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

  GetUserAll: () => {
  const token = sessionStorage.getItem('token');
  return api.get(`/admin/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
},

GetUserById: (id) => {
  const token = sessionStorage.getItem('token');
  return api.get(`/admin/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
},

GetUserUpdate: (data, id) => {
  const token = sessionStorage.getItem('token');
  return api.put(`/admin/user/${id}`,data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
},

GetCategoriaAll: () => {
  const token = sessionStorage.getItem('token');
  return api.get(`/admin/categoria`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
},

GetCategoriaStore: (data) => {
  const token = sessionStorage.getItem('token');
  return api.post(`/admin/categoria`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
},

};

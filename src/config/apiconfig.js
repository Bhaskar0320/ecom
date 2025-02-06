
import axios from 'axios';

// export const DEPLOYED = 'https://ecomserver-bhasjar.up.railway.app'
// const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5454" 
  : "https://ecomserver-bhasjar.up.railway.app";

// const token = localStorage.getItem("jwt")


export const api = axios.create({
  baseURL: API_BASE_URL,
  headers:{
    "Content-Type": "application/json"
  }
})


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

// api.defaults.headers.post['Content-Type'] = 'application/json';



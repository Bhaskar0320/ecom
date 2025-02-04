
import axios from 'axios';

// export const DEPLOYED = 'https://ecomserver-bhasjar.up.railway.app'
// const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5454" 
  : "https://ecomserver-bhasjar.up.railway.app";

const jwt = localStorage.getItem("jwt")


export const api = axios.create({
  baseURL: API_BASE_URL
  // headers:{
  //   "Authorization":`Bearer ${token}`,
  //   "Content-Type": "application/json"
  // }
})

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';



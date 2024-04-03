"use client";

import { API_URL } from "@/utils/constants";
// api.js
import axios from "axios";
const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
// api.interceptors.response.use(
//   (response) => {
//     // You can modify the response data here, e.g., handling pagination
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default api;

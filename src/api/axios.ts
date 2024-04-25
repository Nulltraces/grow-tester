"use client";

import store from "@/store";
import { clearUser } from "@/store/slices/auth";
import { API_URL } from "@/utils/constants";
// api.js
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // You can modify the response data here, e.g., handling pagination

    return response;
  },
  (error: AxiosError) => {
    // console.log("INTERCEPTOR_ERROR: ", error.code);
    if (error.response?.status === 401) {
      console.log("REMOVING_USER");
      store.dispatch(clearUser());
      toast.info("Logged out");
    }
    return Promise.reject(error);
  },
);

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default api;

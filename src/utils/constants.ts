import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://16.171.134.108"
    : "http://localhost:3001";

const socket = io(
  process.env.NODE_ENV === "production" ? `${API_URL}:3001` : API_URL
);

export default socket;

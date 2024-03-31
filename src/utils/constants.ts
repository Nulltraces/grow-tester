import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://16.171.134.108"
    : "http://localhost:3000";

const socket = io(API_URL);

export default socket;

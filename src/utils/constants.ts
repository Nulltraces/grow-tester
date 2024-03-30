import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://localhost:3001";

const socket = io(API_URL);

export default socket;

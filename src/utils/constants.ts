import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? // ? "https://16.171.134.108"
      "https://grow-game-server.onrender.com"
    : "http://localhost:3001";

const socket = io(
  process.env.NODE_ENV === "production"
    ? `https://grow-game-server.onrender.com`
    : API_URL
);

export default socket;

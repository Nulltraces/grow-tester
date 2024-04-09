import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? // ? 'https://16.171.134.108'
      "https://grow-game-server.onrender.com"
    : "http://localhost:3001";

// "https://grow-game-server.onrender.com"

const token = localStorage.getItem("token");
console.log("STORED_TOKEN: ", token);
const socket = io(API_URL, {
  // query: { token: `Bearer ${token}` },
  // transports: ["polling", "websocket"],
  auth: {
    token,
  },
  // extraHeaders: {
  //   authorization: `Bearer ${token}`,
  // },
});

export default socket;

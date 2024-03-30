import { io } from "socket.io-client";
export const BASE_URL = window.location.pathname;

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://16.171.134.108"
    : "http://16.171.134.108";

const socket = io(API_URL);

export default socket;

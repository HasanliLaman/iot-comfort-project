import { io } from "socket.io-client";

export const URL = "http://192.168.43.159:8082";

export const socket = io(URL);

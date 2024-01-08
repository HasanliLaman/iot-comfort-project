import axios from "axios";

const config = {
  baseURL: "http://167.71.39.204:8081",
};

export const api = axios.create(config);

export const login = (body) => api.post("/auth/login", body);

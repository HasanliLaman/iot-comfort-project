import axios from "axios";

const config = {
  baseURL: "http://167.71.39.204:8081",
};

export const api = axios.create(config);

export const login = (body) => api.post("/auth/login", body);

export const getRooms = () => api.get(`/room-info`);

export const updateRoom = (params) =>
  api.put(`/room-info/${params.id}`, params.body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const createRoom = (body) =>
  api.post(`/room-info`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getAbout = () => api.get(`/about`);

export const updateAbout = (body) =>
  api.put(`/about`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getUsers = () =>
  api.get(`/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

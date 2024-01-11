import axios from "axios";

const config = {
  baseURL: "http://192.168.43.159:8081",
};

export const api = axios.create(config);

export const login = (body) => api.post("/auth/login", body);

export const getRooms = (params) =>
  api.get(
    `/room-info?temperature=${params.filter.temperature.join(
      ","
    )}&humidity=${params.filter.humidity.join(
      ","
    )}&soundSensor=${params.filter.sound.join(
      ","
    )}&lightIntensity=${params.filter.light.join(",")}&roomNumber=${
      params.search
    }`
  );

export const getRoomsAdmin = () => api.get(`/room-info`);

export const getRoomInfo = (id) => api.get(`/room-info/${id}`);

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

export const getTemperatureReport = (roomNumber) =>
  api.get(`/temperature-report?roomNumber=Room${roomNumber}&minutes=25`);

export const getHumidityReport = (roomNumber) =>
  api.get(`/humidity-report?roomNumber=Room${roomNumber}&minutes=25`);

export const getSoundReport = (roomNumber) =>
  api.get(`/sound-report?roomNumber=Room${roomNumber}&minutes=25`);

export const getLightReport = (roomNumber) =>
  api.get(`/light-report?roomNumber=Room${roomNumber}&minutes=25`);

export const getTemperaturePrediction = () =>
  api.get(`/temperature-prediction-report`);

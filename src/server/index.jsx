import axios from "axios";

const config = {
  baseURL: "",
};

export const api = axios.create(config);

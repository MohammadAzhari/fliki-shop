import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

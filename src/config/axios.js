// src/config/axios.js  (Plant Gallery client)
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "x-user-id": 123,
  },
});

export default axiosClient;
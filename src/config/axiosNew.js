// src/config/axiosNew.js  (Event Gallery client)
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "x-user-id": 345,
  },
});

export default axiosClient;
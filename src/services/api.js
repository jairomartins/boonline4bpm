// src/services/api.js
import axios from "axios";

const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const PORT = process.env.REACT_APP_PORT;
const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: `${PROTOCOLO}://${BASE_URL}:${PORT}${API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("x-access-token") || ""
  }
});

export default instance;

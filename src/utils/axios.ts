import axios, { type AxiosInstance } from "axios";
import { URL } from "./constants";
import { getToken } from "./handler";

export const request: AxiosInstance = axios.create({
  baseURL: URL,
  timeout: 5000, // 5 seconds
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  },
});

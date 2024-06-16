import axios, { type AxiosInstance } from "axios";
import { URL } from "./constants";

export const request: AxiosInstance = axios.create({
  baseURL: URL,
});

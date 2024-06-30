import axios, { type AxiosInstance } from "axios";
import useAuth from "../hooks/useAuth";
import { URL } from "./constants";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { accessToken } = useAuth();

export const request: AxiosInstance = axios.create({
  baseURL: URL,
  timeout: 5000, // 5 seconds
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

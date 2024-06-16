import axios from "axios";
import { URL } from "./constants";

export const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");

  return token;
};

export const handleCreateUser = async (data: any) => {
  const res = await axios.post(`${URL}/user/api/v1/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export const handleSignIn = async (data: any) => {
  const res = await axios.post(`${URL}/auth/api/v1/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

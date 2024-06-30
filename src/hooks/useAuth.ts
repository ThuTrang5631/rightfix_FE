import { useState } from "react";
import {
  getTokenLocalStorage,
  getTokenSessionStorage,
  setTokenLocalStorage,
  setTokenSessionStorage,
} from "../utils/handler";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getTokenSessionStorage || getTokenLocalStorage
  );

  const login = (token: string, rememberMe: boolean) => {
    if (rememberMe) {
      setTokenLocalStorage(token);
    } else {
      setTokenSessionStorage(token);
    }

    setAccessToken(token);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  console.log("accessToken", accessToken);

  return {
    accessToken,
    login,
    logout,
  };
};

export default useAuth;
